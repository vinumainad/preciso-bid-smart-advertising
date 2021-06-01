<?php
/**
 * Adminhtml precisobidsmartadvertising list block
 *
 */
namespace Preciso\PrecisoBidSmartAdvertising\Block\Adminhtml;

class PrecisoBidSmartAdvertising extends \Magento\Backend\Block\Widget\Grid\Container
{
    /**
     * Constructor
     *
     * @return void
     */
    protected function _construct()
    {
        $this->_controller = 'adminhtml_precisobidsmartadvertising';
        $this->_blockGroup = 'Preciso_PrecisoBidSmartAdvertising';
        $this->_headerText = __('PrecisoBidSmartAdvertising');
        $this->_addButtonLabel = __('Add New PrecisoBidSmartAdvertising');
        parent::_construct();
        if ($this->_isAllowedAction('Preciso_PrecisoBidSmartAdvertising::save')) {
            $this->buttonList->update('add', 'label', __('Add New PrecisoBidSmartAdvertising'));
        } else {
            $this->buttonList->remove('add');
        }
    }
    
    /**
     * Check permission for passed action
     *
     * @param string $resourceId
     * @return bool
     */
    protected function _isAllowedAction($resourceId)
    {
        return $this->_authorization->isAllowed($resourceId);
    }
}
