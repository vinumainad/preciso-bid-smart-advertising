<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\AbstractController;

use Magento\Framework\App\RequestInterface;
use Magento\Framework\App\ResponseInterface;
use Magento\Framework\Registry;

class PrecisoBidSmartAdvertisingLoader implements PrecisoBidSmartAdvertisingLoaderInterface
{
    /**
     * @var \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertisingFactory
     */
    protected $precisobidsmartadvertisingFactory;

    /**
     * @var \Magento\Framework\Registry
     */
    protected $registry;

    /**
     * @var \Magento\Framework\UrlInterface
     */
    protected $url;

    /**
     * @param \Preciso\PrecisoBidSmartAdvertising\Model
     \PrecisoBidSmartAdvertisingFactory $precisobidsmartadvertisingFactory
     * @param OrderViewAuthorizationInterface $orderAuthorization
     * @param Registry $registry
     * @param \Magento\Framework\UrlInterface $url
     */
    public function __construct(
        \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertisingFactory $precisobidsmartadvertisingFactory,
        Registry $registry,
        \Magento\Framework\UrlInterface $url
    ) {
        $this->precisobidsmartadvertisingFactory = $precisobidsmartadvertisingFactory;
        $this->registry = $registry;
        $this->url = $url;
    }

    /**
     * @param RequestInterface $request
     * @param ResponseInterface $response
     * @return bool
     */
    public function load(RequestInterface $request, ResponseInterface $response)
    {
        $id = (int)$request->getParam('id');
        if (!$id) {
            $request->initForward();
            $request->setActionName('noroute');
            $request->setDispatched(false);
            return false;
        }

        $precisobidsmartadvertising = $this->precisobidsmartadvertisingFactory->create()->load($id);
        $this->registry->register('current_precisobidsmartadvertising', $precisobidsmartadvertising);
        return true;
    }
}
