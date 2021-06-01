<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\AbstractController;

use Magento\Framework\App\RequestInterface;
use Magento\Framework\App\ResponseInterface;

interface PrecisoBidSmartAdvertisingLoaderInterface
{
    /**
     * @param RequestInterface $request
     * @param ResponseInterface $response
     * @return \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising
     */
    public function load(RequestInterface $request, ResponseInterface $response);
}
