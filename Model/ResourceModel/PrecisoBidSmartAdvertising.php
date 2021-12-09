<?php

namespace Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel;

/**
 * PrecisoBidSmartAdvertising Resource Model
 */
class PrecisoBidSmartAdvertising extends \Magento\Framework\Model\ResourceModel\Db\AbstractDb
{
    /**
     * Initialize resource model
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_init('preciso_precisobidsmartadvertising', 'precisobidsmartadvertising_id');
    }
}
