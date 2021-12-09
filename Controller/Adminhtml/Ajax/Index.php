<?php

namespace Preciso\PrecisoBidSmartAdvertising\Controller\Adminhtml\Ajax;

use Magento\Backend\App\Action\Context;
use Magento\Framework\View\Result\PageFactory;
use Magento\Framework\Controller\Result\JsonFactory;

class Index extends \Magento\Backend\App\Action
{
     /**
      * @var \Magento\Framework\View\Result\PageFactory
      */
    protected $resultPageFactory;

    protected $jsonPageFactory;

    public function __construct(Context $context, PageFactory $resultPageFactory, JsonFactory $jsonPageFactory)
    {
        $this->_resultPageFactory = $resultPageFactory;
            $this->_resultJsonFactory = $jsonPageFactory;
        parent::__construct($context);
    }

    public function execute()
    {
        if ($this->getRequest()->isAjax()) {
                $result = $this->_resultJsonFactory->create();
                $resultPage = $this->_resultPageFactory->create();

            $objectManager =  \Magento\Framework\App\ObjectManager::getInstance()
            ->get(\Magento\Catalog\Model\Session::class);

            // plugin_set
            $currentOptionName = $this->getRequest()->getParam('optionname');
            $currentOptionValue = $this->getRequest()->getParam('optionvalue');
            $username = $this->getRequest()->getParam('email');
            $userpass = $this->getRequest()->getParam('password');
            $passdecode = base64_decode($userpass);
            $passdecd = base64_decode($passdecode);
                $this->_resources = \Magento\Framework\App\ObjectManager::getInstance()
                    ->get('Magento\Framework\App\ResourceConnection');
                $connection= $this->_resources->getConnection();
                $tableName = $this->_resources->getTableName('Preciso_plugin_set');
            if ($currentOptionName == 'plugin_set') {
                $insert_sql = "UPDATE ".$tableName." SET ".$currentOptionName."='".$currentOptionValue."',
                token='',
                campaignId='0',
                userId='0',
                username='$username',
                userpass='$passdecd' 
                WHERE id='1'";
                 if ($connection->query($insert_sql)) {
                    $objectManager->setUsername($username);
                    $objectManager->setUserpass($passdecd);
                }

               // $connection->query($insert_sql);
            }

            // set term page
            $term_page = $this->getRequest()->getParam('term_page');
            $cmpId = $this->getRequest()->getParam('campaignId1');

           
            if ($term_page == '1') {
                $objectManager->setMyName('term_page');
                $objectManager->setCampaignId($cmpId);
            }

            $is205 = $this->getRequest()->getParam('is205');
           
            if ($is205 == 'blank_page') {
                $objectManager->setBlankPage('blank_page');
             /*  
                $campaignId = $this->getRequest()->getParam('campaignId');
                $token = $this->getRequest()->getParam('token');
                $userId = $this->getRequest()->getParam('userId');
                $username = $this->getRequest()->getParam('username');
                $userpass = $this->getRequest()->getParam('userpass');

                $update_sql = "UPDATE ".$tableName." SET 
                token='$token',
                campaignId='$campaignId',
                userId='$userId',
                username='$username',
                userpass='$userpass' 
                WHERE id='1'";
                if ($connection->query($update_sql)) {
                    $objectManager->setToken($token);
                    $objectManager->setCampaignId($campaignId);
                    $objectManager->setUserId($userId);
                    $objectManager->setUsername($username);
                    $objectManager->setUserpass($userpass);
                    $objectManager->setBlankPage('blank_page');
                }
                */
            }


            $userDelete = $this->getRequest()->getParam('userDelete');

            if ($userDelete == '1') {
               
                $insert_sql = "UPDATE ".$tableName." SET
                plugin_set='0',
                token='0',
                campaignId='0',
                userId='0',
                username='0',
                userpass='0' 
                WHERE id='1'";
                 if ($connection->query($insert_sql)) {
                    $objectManager->setUsername($username);
                    $objectManager->setUserpass($passdecd);
                }
            }

            // term_page Submit
            $term_page = $this->getRequest()->getParam('term_page');
            if ($term_page == 'submit') {
                $objectManager->unsMyName();
                $campaignId = $this->getRequest()->getParam('campaignId');
                $token = $this->getRequest()->getParam('token');
                $userId = $this->getRequest()->getParam('userId');
                $username = $this->getRequest()->getParam('username');
                $userpass = $this->getRequest()->getParam('userpass');
             
               /* $update_sql = "UPDATE ".$tableName." SET 
                token='$token',
                campaignId='$campaignId',
                userId='$userId',
                username='$username',
                userpass='$userpass' 
                WHERE id='1'";
                */
                $update_sql = "UPDATE ".$tableName." SET 
                token='$token',
                campaignId='$campaignId',
                userId='$userId'
                WHERE id='1'";
                if ($connection->query($update_sql)) {
                    $objectManager->setToken($token);
                    $objectManager->setCampaignId($campaignId);
                    $objectManager->setUserId($userId);
                    $objectManager->setUsername($username);
                    $objectManager->setUserpass($userpass);
                }
            }

            // login loginSubmit
            $loginSubmit = $this->getRequest()->getParam('login');
            if ($loginSubmit == 'loginSubmit') {
                $campaignId = $this->getRequest()->getParam('campaignId');
                $token = $this->getRequest()->getParam('token');
                $userId = $this->getRequest()->getParam('userId');
                $username = $this->getRequest()->getParam('username');
                $userpass = $this->getRequest()->getParam('userpass');

                $update_sql = "UPDATE ".$tableName." SET 
                token='$token',
                campaignId='$campaignId',
                userId='$userId',
                username='$username',
                userpass='$userpass' 
                WHERE id='1'";
                if ($connection->query($update_sql)) {
                    $objectManager->setToken($token);
                    $objectManager->setCampaignId($campaignId);
                    $objectManager->setUserId($userId);
                    $objectManager->setUsername($username);
                    $objectManager->setUserpass($userpass);
                }
            }

        } else {
            return  $resultPage = $this->resultPageFactory->create();
        }
    }
}
