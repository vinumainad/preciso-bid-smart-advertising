<?php
namespace Preciso\PrecisoBidSmartAdvertising\Block\Adminhtml\PrecisoBidSmartAdvertising;

/**
 * Adminhtml PrecisoBidSmartAdvertising grid
 */
class Grid extends \Magento\Backend\Block\Widget\Grid\Extended
{
    /**
     * @var \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel\PrecisoBidSmartAdvertising\CollectionFactory
     */
    protected $_collectionFactory;

    /**
     * @var \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising
     */
    protected $_precisobidsmartadvertising;

    /**
     * @param \Magento\Backend\Block\Template\Context $context
     * @param \Magento\Backend\Helper\Data $backendHelper
     * @param \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising $precisobidsmartadvertisingPage
     * @param \Preciso\PrecisoBidSmartAdvertising\Model
     \ResourceModel\PrecisoBidSmartAdvertising\CollectionFactory $collectionFactory
     * @param \Magento\Core\Model\PageLayout\Config\Builder $pageLayoutBuilder
     * @param array $data
     */
    public function __construct(
        \Magento\Backend\Block\Template\Context $context,
        \Magento\Backend\Helper\Data $backendHelper,
        \Preciso\PrecisoBidSmartAdvertising\Model\PrecisoBidSmartAdvertising
        $precisobidsmartadvertising,
        \Preciso\PrecisoBidSmartAdvertising\Model\ResourceModel
        \PrecisoBidSmartAdvertising\CollectionFactory $collectionFactory,
        array $data = []
    ) {
        $this->_collectionFactory = $collectionFactory;
        $this->_precisobidsmartadvertising = $precisobidsmartadvertising;
        parent::__construct($context, $backendHelper, $data);
    }

    /**
     * @return void
     */
    protected function _construct()
    {
        parent::_construct();
        $this->setId('precisobidsmartadvertisingGrid');
        $this->setDefaultSort('precisobidsmartadvertising_id');
        $this->setDefaultDir('DESC');
        $this->setUseAjax(true);
        $this->setSaveParametersInSession(true);
    }

    /**
     * Prepare collection
     *
     * @return \Magento\Backend\Block\Widget\Grid
     */
    protected function _prepareCollection()
    {
        $collection = $this->_collectionFactory->create();
        /* @var $collection \Preciso\PrecisoBidSmartAdvertising\Model
        \ResourceModel\PrecisoBidSmartAdvertising\Collection */
        $this->setCollection($collection);

        return parent::_prepareCollection();
    }

    /**
     * Prepare columns
     *
     * @return \Magento\Backend\Block\Widget\Grid\Extended
     */
    protected function _prepareColumns()
    {
        $this->addColumn('precisobidsmartadvertising_id', [
            'header'    => __('ID'),
            'index'     => 'precisobidsmartadvertising_id',
        ]);
        
        $this->addColumn('title', ['header' => __('Title'), 'index' => 'title']);
        $this->addColumn('author', ['header' => __('Author'), 'index' => 'author']);
        
        $this->addColumn(
            'published_at',
            [
                'header' => __('Published On'),
                'index' => 'published_at',
                'type' => 'date',
                'header_css_class' => 'col-date',
                'column_css_class' => 'col-date'
            ]
        );
        
        $this->addColumn(
            'created_at',
            [
                'header' => __('Created'),
                'index' => 'created_at',
                'type' => 'datetime',
                'header_css_class' => 'col-date',
                'column_css_class' => 'col-date'
            ]
        );
        
        $this->addColumn(
            'action',
            [
                'header' => __('Edit'),
                'type' => 'action',
                'getter' => 'getId',
                'actions' => [
                    [
                        'caption' => __('Edit'),
                        'url' => [
                            'base' => '*/*/edit',
                            'params' => ['store' => $this->getRequest()->getParam('store')]
                        ],
                        'field' => 'precisobidsmartadvertising_id'
                    ]
                ],
                'sortable' => false,
                'filter' => false,
                'header_css_class' => 'col-action',
                'column_css_class' => 'col-action'
            ]
        );

        return parent::_prepareColumns();
    }

    /**
     * Row click url
     *
     * @param \Magento\Framework\Object $row
     * @return string
     */
    public function getRowUrl($row)
    {
        return $this->getUrl('*/*/edit', ['precisobidsmartadvertising_id' => $row->getId()]);
    }

    /**
     * Get grid url
     *
     * @return string
     */
    public function getGridUrl()
    {
        return $this->getUrl('*/*/grid', ['_current' => true]);
    }
}
