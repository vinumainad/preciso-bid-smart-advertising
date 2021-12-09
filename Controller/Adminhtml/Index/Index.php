<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\Adminhtml\Index;

use Magento\Backend\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;

class Index extends \Magento\Backend\App\Action
{
    /**
     * @var PageFactory
     */
    protected $resultPageFactory;

    /**
     * @param Context $context
     * @param PageFactory $resultPageFactory
     */
    public function __construct(
        Context $context,
        PageFactory $resultPageFactory
    ) {
        parent::__construct($context);
        $this->resultPageFactory = $resultPageFactory;
    }
    
    /**
     * Check the permission to run it
     *
     * @return bool
     */
    protected function _isAllowed()
    {
        return $this->_authorization
        ->isAllowed(
            'Preciso_PrecisoBidSmartAdvertising::precisobidsmartadvertising_manage'
        );
    }

    /**
     * PrecisoBidSmartAdvertising List action
     *
     * @return void
     */
    public function execute()
    {
        /** @var \Magento\Backend\Model\View\Result\Page $resultPage */
        $resultPage = $this->resultPageFactory->create();
        $resultPage->setActiveMenu(
            'Preciso_PrecisoBidSmartAdvertising::precisobidsmartadvertising_manage'
        )->addBreadcrumb(
            __('PrecisoBidSmartAdvertising'),
            __('PrecisoBidSmartAdvertising')
        )->addBreadcrumb(
            __('Manage PrecisoBidSmartAdvertising'),
            __('Manage PrecisoBidSmartAdvertising')
        );
        $resultPage->getConfig()->getTitle()->prepend(__('PrecisoBidSmartAdvertising'));
        return $resultPage;
    }
}
