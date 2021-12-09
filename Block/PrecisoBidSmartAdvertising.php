<?php

namespace Preciso\PrecisoBidSmartAdvertising\Block;

/**
 * PrecisoBidSmartAdvertising content block
 */
class PrecisoBidSmartAdvertising extends \Magento\Framework\View\Element\Template
{
    /**
     * PrecisoBidSmartAdvertising collection
     *
     * @var Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising\Collection
     */
    protected $_precisobidsmartadvertisingCollection = null;
    
    /**
     * PrecisoBidSmartAdvertising factory
     *
     * @var \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertisingFactory
     */
    protected $_precisobidsmartadvertisingCollectionFactory;
    
    /** @var \Preciso\PrecisoBidSmartAdvertising\Helper\Data */
    protected $_dataHelper;
    
    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel
     \PrecisoBidSmartAdvertising\CollectionFactory $precisobidsmartadvertisingCollectionFactory
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising\CollectionFactory
        $precisobidsmartadvertisingCollectionFactory,
        \Preciso\PrecisoBidSmartAdvertising\Helper\Data $dataHelper,
        array $data = []
    ) {
        $this->_precisobidsmartadvertisingCollectionFactory = $precisobidsmartadvertisingCollectionFactory;
        $this->_dataHelper = $dataHelper;
        parent::__construct(
            $context,
            $data
        );
    }
    
    /**
     * Retrieve precisobidsmartadvertising collection
     *
     * @return Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising\Collection
     */
    protected function _getCollection()
    {
        $collection = $this->_precisobidsmartadvertisingCollectionFactory->create();
        return $collection;
    }
    
    /**
     * Retrieve prepared precisobidsmartadvertising collection
     *
     * @return Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising\Collection
     */
    public function getCollection()
    {
        if ($this->_precisobidsmartadvertisingCollection == "") {
            $this->_precisobidsmartadvertisingCollection = $this->_getCollection();
            $this->_precisobidsmartadvertisingCollection->setCurPage($this->getCurrentPage());
            $this->_precisobidsmartadvertisingCollection
            ->setPageSize($this->_dataHelper->getPrecisoBidSmartAdvertisingPerPage());
            $this->_precisobidsmartadvertisingCollection->setOrder('published_at', 'asc');
        }

        return $this->_precisobidsmartadvertisingCollection;
    }
    
    /**
     * Fetch the current page for the precisobidsmartadvertising list
     *
     * @return int
     */
    public function getCurrentPage()
    {
        return $this->getData('current_page') ? $this->getData('current_page') : 1;
    }
    
    /**
     * Return URL to item's view page
     *
     * @param Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising $precisobidsmartadvertisingItem
     * @return string
     */
    public function getItemUrl($precisobidsmartadvertisingItem)
    {
        return $this->getUrl('*/*/view', ['id' => $precisobidsmartadvertisingItem->getId()]);
    }
    
    /**
     * Return URL for resized PrecisoBidSmartAdvertising Item image
     *
     * @param Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising $item
     * @param integer $width
     * @return string|false
     */
    public function getImageUrl($item, $width)
    {
        return $this->_dataHelper->resize($item, $width);
    }
    
    /**
     * Get a pager
     *
     * @return string|null
     */
    public function getPager()
    {
        $pager = $this->getChildBlock('precisobidsmartadvertising_list_pager');
        if ($pager instanceof \Magento\Framework\Object) {
            $precisobidsmartadvertisingPerPage = $this->_dataHelper->getPrecisoBidSmartAdvertisingPerPage();

            $pager->setAvailableLimit([$precisobidsmartadvertisingPerPage => $precisobidsmartadvertisingPerPage]);
            $pager->setTotalNum($this->getCollection()->getSize());
            $pager->setCollection($this->getCollection());
            $pager->setShowPerPage(true);
            $pager->setFrameLength(
                $this->_scopeConfig->getValue(
                    'design/pagination/pagination_frame',
                    \Magento\Store\Model\ScopeInterface::SCOPE_STORE
                )
            )->setJump(
                $this->_scopeConfig->getValue(
                    'design/pagination/pagination_frame_skip',
                    \Magento\Store\Model\ScopeInterface::SCOPE_STORE
                )
            );

            return $pager->toHtml();
        }

        return null;
    }
}
