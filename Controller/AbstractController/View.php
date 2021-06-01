<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\AbstractController;

use Magento\Framework\App\Action;
use Magento\Framework\View\Result\PageFactory;

abstract class View extends Action\Action
{
    /**
     * @var \Preciso\PrecisoBidSmartAdvertising\Controller\AbstractController\PrecisoBidSmartAdvertisingLoaderInterface
     */
    protected $precisobidsmartadvertisingLoader;
    
    /**
     * @var PageFactory
     */
    protected $resultPageFactory;

    /**
     * @param Action\Context $context
     * @param OrderLoaderInterface $orderLoader
     * @param PageFactory $resultPageFactory
     */
    public function __construct(
        Action\Context $context,
        PrecisoBidSmartAdvertisingLoaderInterface $precisobidsmartadvertisingLoader,
        PageFactory $resultPageFactory
    ) {
        $this->precisobidsmartadvertisingLoader = $precisobidsmartadvertisingLoader;
        $this->resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }

    /**
     * PrecisoBidSmartAdvertising view page
     *
     * @return void
     */
    public function execute()
    {
        if (!$this->precisobidsmartadvertisingLoader->load($this->_request, $this->_response)) {
            return;
        }

        /** @var \Magento\Framework\View\Result\Page $resultPage */
        $resultPage = $this->resultPageFactory->create();
        return $resultPage;
    }
}
