<?php

/**
 * PrecisoBidSmartAdvertising Resource Collection
 */
namespace Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising;

class Collection extends \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection
{
    /**
     * Resource initialization
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init(
            \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising::class,
            \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising::class
        );
    }
}
