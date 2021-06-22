<?php

namespace Preciso\PrecisoBidSmartAdvertising\Model;

/**
 * PrecisoBidSmartAdvertising Model
 *
 * @method \Preciso\PrecisoBidSmartAdvertising\Model\Resource\Page _getResource()
 * @method \Preciso\PrecisoBidSmartAdvertising\Model\Resource\Page getResource()
 */
class PrecisoBidSmartAdvertising extends \Magento\Framework\Model\AbstractModel
{
    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init(
            \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising::class
        );
    }
}
