<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\Adminhtml\Index;

use Magento\Backend\App\Action;

class Save extends \Magento\Backend\App\Action
{
    /**
     * @var PostDataProcessor
     */
    protected $dataProcessor;

    /**
     * @param Action\Context $context
     * @param PostDataProcessor $dataProcessor
     */
    public function __construct(Action\Context $context, PostDataProcessor $dataProcessor)
    {
        $this->dataProcessor = $dataProcessor;
        parent::__construct($context);
    }

    /**
     * {@inheritdoc}
     */
    protected function _isAllowed()
    {
        return $this->_authorization->isAllowed('Preciso_PrecisoBidSmartAdvertising::save');
    }

    /**
     * Save action
     *
     * @return void
     */
    public function execute()
    {
        $data = $this->getRequest()->getPostValue();
        if ($data) {
            $data = $this->dataProcessor->filter($data);
            $model = $this->_objectManager->create(
                Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising::class
            );

            $id = $this->getRequest()->getParam('precisobidsmartadvertising_id');
            if ($id) {
                $model->load($id);
            }
            
            // save image data and remove from data array
            if (isset($data['image'])) {
                $imageData = $data['image'];
                unset($data['image']);
            } else {
                $imageData = [];
            }

            $model->addData($data);

            if (!$this->dataProcessor->validate($data)) {
                $this->_redirect('*/*/edit', ['precisobidsmartadvertising_id' => $model->getId(), '_current' => true]);
                return;
            }

            try {
                $imageHelper = $this->_objectManager->get(
                    Preciso\PrecisoBidSmartAdvertising\Helper\Data::class
                );

                if (isset($imageData['delete']) && $model->getImage()) {
                    $imageHelper->removeImage($model->getImage());
                    $model->setImage(null);
                }
                
                $imageFile = $imageHelper->uploadImage('image');
                if ($imageFile) {
                    $model->setImage($imageFile);
                }
                
                $model->save();
                $this->messageManager->addSuccess(__('The Data has been saved.'));
                $this->_objectManager->get(
                    Magento\Backend\Model\Session::class
                )->setFormData(false);
                if ($this->getRequest()->getParam('back')) {
                    $this->_redirect(
                        '*/*/edit',
                        [
                            'precisobidsmartadvertising_id' => $model->getId(),
                            '_current' => true
                        ]
                    );
                    return;
                }
                $this->_redirect('*/*/');
                return;
            } catch (\Magento\Framework\Model\Exception $e) {
                $this->messageManager->addError($e->getMessage());
            } catch (\RuntimeException $e) {
                $this->messageManager->addError($e->getMessage());
            } catch (\Exception $e) {
                $this->messageManager->addException($e, __('Something went wrong while saving the data.'));
            }

            $this->_getSession()->setFormData($data);
            $this->_redirect(
                '*/*/edit',
                [
                    'precisobidsmartadvertising_id' => $this->getRequest()
                    ->getParam('precisobidsmartadvertising_id')
                ]
            );
            return;
        }
        $this->_redirect('*/*/');
    }
}
