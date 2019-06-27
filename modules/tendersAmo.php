<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
$user = [
  'USER_LOGIN'=>'green.landia@mail.ru',
  'USER_HASH'=>'44b177ee540618a38dd30bae14f1d57a4a1c8dfe'
];
$AMO_DATA = [
  'SUBDOMAIN' => 'urman',
  'PIPELINE_ID' => 1068226
];

$TENDERLAND_FIELDS = [
  'URL' => 'www.tenderland.ru/pages/main?',
  'AUTOPOISK' => '369225', // гос актуальный
  // 'AUTOPOISK' => '313477', // гос старый
  // 'AUTOPOISK' => '325954', // тест
  'REPORT' => '26380',
  'LOGIN' => 'green01',
  'PASSWORD' => '2983486@'
];

class Tenders {

  public function login ($user, $AMO_DATA) {

    $link='https://'.$AMO_DATA["SUBDOMAIN"].'.amocrm.ru/private/api/auth.php?type=json';

    $curl=curl_init();
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
    curl_setopt($curl,CURLOPT_URL,$link);
    curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
    curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($user));
    curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));
    curl_setopt($curl,CURLOPT_HEADER,false);
    curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
    $out=curl_exec($curl);
    $code=curl_getinfo($curl,CURLINFO_HTTP_CODE);
    curl_close($curl);
    $code=(int)$code;
    $errors=array(
      301=>'Moved permanently',
      400=>'Bad request',
      401=>'Unauthorized',
      403=>'Forbidden',
      404=>'Not found',
      500=>'Internal server error',
      502=>'Bad gateway',
      503=>'Service unavailable'
    );
    try
    {
     if($code!=200 && $code!=204)
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
    }
    catch(Exception $E)
    {
      die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
    }
    
    $Response=json_decode($out,true);
    $Response=$Response['response'];
    $json = new stdClass;
    $json -> isAuth = 'false';
    
    if(isset($Response)) #Флаг авторизации доступен в свойстве "auth"
    return 'true';

    return 'false';
  }

  public function getRequestId ($TENDERLAND_FIELDS) {

    $link= $TENDERLAND_FIELDS["URL"].'autopoisk='.$TENDERLAND_FIELDS["AUTOPOISK"].'&api=1&report='.$TENDERLAND_FIELDS["REPORT"].'&login='.$TENDERLAND_FIELDS["LOGIN"].'&password='.$TENDERLAND_FIELDS["PASSWORD"].'&force_prev=0';

    $curl=curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
    curl_setopt($curl, CURLOPT_URL, $link);
    curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl, CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    $out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
    $code=curl_getinfo($curl, CURLINFO_HTTP_CODE);
    $code=(int)$code;
    $errors=array(
    301=>'Moved permanently',
    400=>'Bad request',
    401=>'Unauthorized',
    403=>'Forbidden',
    404=>'Not found',
    500=>'Internal server error',
    502=>'Bad gateway',
    503=>'Service unavailable'
    );
    try
    {
      if($code!=200 && $code!=204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
      }
      else
      {
        $out=json_decode($out, true);
        return $out['request_id'];
      }
    }
    catch(Exception $E)
    {
      die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
    }
  }

  public function getXML ($requestId, $TENDERLAND_FIELDS) {

    $link = $TENDERLAND_FIELDS["URL"].'&api=1&login='.$TENDERLAND_FIELDS["LOGIN"].'&password='.$TENDERLAND_FIELDS["PASSWORD"].'&request_id='.$requestId;
    
    // $link = 'https://www.tenderland.ru/pages/main?&api=1&login=green01&password=2983486@&request_id=390bdb08d8a09563f3a5a8da88a9354d';

    $curl=curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_USERAGENT, 'amoCRM-API-client/1.0');
    curl_setopt($curl, CURLOPT_URL, $link);
    curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl, CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt');
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    $out=curl_exec($curl);
    $code=curl_getinfo($curl, CURLINFO_HTTP_CODE);
    $code=(int)$code;
    $errors=array(
    301=>'Moved permanently',
    400=>'Bad request',
    401=>'Unauthorized',
    403=>'Forbidden',
    404=>'Not found',
    500=>'Internal server error',
    502=>'Bad gateway',
    503=>'Service unavailable'
    );

    try
    {
      if($code!=200 && $code!=204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
      }
      if($code==200 || $code==204) {
        $out = json_decode ($out);
        $xml = [
          'file' => $out -> data[0] -> file,
          'items_count' => $out -> data[0] -> items_count
        ];
        return $xml;
      }
    }
    catch(Exception $E)
    {
    die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
    }
  }

  public function xmlToJson ($url) {
    $fileContents= file_get_contents($url);
    $fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);
    $fileContents = trim(str_replace('"', "'", $fileContents));
    $simpleXml = simplexml_load_string($fileContents);
    $json = json_encode($simpleXml);

    return $json;
  }

  public function parseTenders($rawTenders, $AMO_DATA, $items_count){
    
    $leads['add'] = [];

    if($items_count == '1'){
      $name = $rawTenders['name'] ?: "";
      $start_price_contract = $rawTenders['start_price_contract'] ?: "";
      $publish_date = $rawTenders['publish_date'] ? strtotime($rawTenders['publish_date']) : "";
      $publication_date = $rawTenders['publication_date'] ? strtotime($rawTenders['publication_date']) : "";
      $datetime_dedline_request = $rawTenders['datetime_dedline_request'] ? strtotime($rawTenders['datetime_dedline_request']) : "";
      $datetime_holding = $rawTenders['datetime_holding'] ? strtotime($rawTenders['datetime_holding']) : "";
      $request_type = ($rawTenders['request_type'] && sizeof($rawTenders['request_type']) ) ? $rawTenders['request_type'] : "";
      $customer = $rawTenders['customer'] && sizeof($rawTenders['customer']) ? $rawTenders['customer'] : "";
      $region = $rawTenders['region'] && sizeof($rawTenders['region']) ? $rawTenders['region'] : "";
      $link = $rawTenders['link'] && sizeof($rawTenders['link']) ? $rawTenders['link'] : "";
      $request_provision_size = $rawTenders['request_provision_size'] && sizeof($rawTenders['request_provision_size']) ? $rawTenders['request_provision_size'][0] : "";
      $date_delivery_goods = $rawTenders['date_delivery_goods'] && sizeof($rawTenders['date_delivery_goods']) ? $rawTenders['date_delivery_goods'] : "";
      $e_place = $rawTenders['e_place'] && sizeof($rawTenders['e_place']) ? $rawTenders['e_place'] : "";
      $archive_link = $rawTenders['archive_link'] && sizeof($rawTenders['archive_link']) ? $rawTenders['archive_link'] : "";
      $tender_id = substr($archive_link, -8);
      $tender_link = 'https://www.tenderland.ru/pages/catalog/tenders/0/'.$tender_id;
      $tender_number = $rawTenders['@attributes']['number'];
      
      $leads['add'][]=[
        'name'=>$name,
        'sale'=>$start_price_contract,
        'responsible_user_id'=>215309,
        'pipeline_id'=>$AMO_DATA["PIPELINE_ID"],
        'status_id' => (stripos($name, 'освоен') === false) ? 19682035 : 19871332,
        'custom_fields'=>[
          [
            'id'=>611863,
            'values'=>[
              [
                'value'=> $tender_number
              ]
            ]
          ],
          [
            'id'=>610811,
            'values'=>[
              [
                'value'=> $publish_date
              ]
            ]
          ],
          [
            'id'=>610813,
            'values'=>[
              [
                'value'=> $publication_date
              ]
            ]
          ],
          [
            'id'=>610815,
            'values'=>[
              [
                'value'=> $datetime_dedline_request
              ]
            ]
          ],
          [
            'id'=>610817,
            'values'=>[
              [
                'value'=> $datetime_holding
              ]
            ]
          ],
          [
            'id'=>610693,
            'values'=>[
              [
                'value'=> $request_type
              ]
            ]
          ],
          [
            'id'=>610703,
            'values'=>[
              [
                'value'=> $customer
              ]
            ]
          ],
          [
            'id'=>610719,
            'values'=>[
              [
                'value'=> $region
              ]
            ]
          ],
          [
            'id'=>610721,
            'values'=>[
              [
                'value'=> $category
              ]
            ]
          ],
          [
            'id'=>610725,
            'values'=>[
              [
                'value'=> $link
              ]
            ]
          ],
          [
            'id'=>610727,
            'values'=>[
              [
                'value'=> $request_provision_size
              ]
            ]
          ],
          [
            'id'=>610731,
            'values'=>[
              [
                'value'=> $date_delivery_goods
              ]
            ]
          ],
          [
            'id'=>610735,
            'values'=>[
              [
                'value'=> $e_place
              ]
            ]
          ],
          [
            'id'=>611769,
            'values'=>[
              [
                'value'=> $archive_link
              ]
            ]
          ],
          [
            'id'=>611861,
            'values'=>[
              [
                'value'=> $tender_link
              ]
            ]
          ]
          ]
        ];
    } else {
      foreach ($rawTenders as $tender)
      { 
        $name = $tender['name'] ?: "";
        $start_price_contract = $tender['start_price_contract'] ?: "";
        $publish_date = $tender['publish_date'] ? strtotime($tender['publish_date']) : "";
        $publication_date = $tender['publication_date'] ? strtotime($tender['publication_date']) : "";
        $datetime_dedline_request = $tender['datetime_dedline_request'] ? strtotime($tender['datetime_dedline_request']) : "";
        $datetime_holding = $tender['datetime_holding'] ? strtotime($tender['datetime_holding']) : "";
        $request_type = ($tender['request_type'] && sizeof($tender['request_type']) ) ? $tender['request_type'] : "";
        $customer = $tender['customer'] && sizeof($tender['customer']) ? $tender['customer'] : "";
        $region = $tender['region'] && sizeof($tender['region']) ? $tender['region'] : "";
        $link = $tender['link'] && sizeof($tender['link']) ? $tender['link'] : "";
        $request_provision_size = $tender['request_provision_size'] && sizeof($tender['request_provision_size']) ? $tender['request_provision_size'][0] : "";
        $date_delivery_goods = $tender['date_delivery_goods'] && sizeof($tender['date_delivery_goods']) ? $tender['date_delivery_goods'] : "";
        $e_place = $tender['e_place'] && sizeof($tender['e_place']) ? $tender['e_place'] : "";
        $archive_link = $tender['archive_link'] && sizeof($tender['archive_link']) ? $tender['archive_link'] : "";
        $tender_id = substr($archive_link, -8);
        $tender_link = 'https://www.tenderland.ru/pages/catalog/tenders/0/'.$tender_id;
        $tender_number = $tender['@attributes']['number'];
        
        $leads['add'][]=[
          'name'=>$name,
          'sale'=>$start_price_contract,
          'responsible_user_id'=>215309,
          'pipeline_id'=>$AMO_DATA["PIPELINE_ID"],
          'status_id' => (stripos($name, 'освоен') === false) ? 19682035 : 19871332,
          'custom_fields'=>[
            [
              'id'=>611863,
              'values'=>[
                [
                  'value'=> $tender_number
                ]
              ]
            ],
            [
              'id'=>610811,
              'values'=>[
                [
                  'value'=> $publish_date
                ]
              ]
            ],
            [
              'id'=>610813,
              'values'=>[
                [
                  'value'=> $publication_date
                ]
              ]
            ],
            [
              'id'=>610815,
              'values'=>[
                [
                  'value'=> $datetime_dedline_request
                ]
              ]
            ],
            [
              'id'=>610817,
              'values'=>[
                [
                  'value'=> $datetime_holding
                ]
              ]
            ],
            [
              'id'=>610693,
              'values'=>[
                [
                  'value'=> $request_type
                ]
              ]
            ],
            [
              'id'=>610703,
              'values'=>[
                [
                  'value'=> $customer
                ]
              ]
            ],
            [
              'id'=>610719,
              'values'=>[
                [
                  'value'=> $region
                ]
              ]
            ],
            [
              'id'=>610721,
              'values'=>[
                [
                  'value'=> $category
                ]
              ]
            ],
            [
              'id'=>610725,
              'values'=>[
                [
                  'value'=> $link
                ]
              ]
            ],
            [
              'id'=>610727,
              'values'=>[
                [
                  'value'=> $request_provision_size
                ]
              ]
            ],
            [
              'id'=>610731,
              'values'=>[
                [
                  'value'=> $date_delivery_goods
                ]
              ]
            ],
            [
              'id'=>610735,
              'values'=>[
                [
                  'value'=> $e_place
                ]
              ]
            ],
            [
              'id'=>611769,
              'values'=>[
                [
                  'value'=> $archive_link
                ]
              ]
            ],
            [
              'id'=>611861,
              'values'=>[
                [
                  'value'=> $tender_link
                ]
              ]
            ]
            ]
          ];
      }
    }
    unset($tender);
    return $leads;
  }

  public function addLeads($leads, $AMO_DATA){

    $link='https://'.$AMO_DATA["SUBDOMAIN"].'.amocrm.ru/api/v2/leads';
    $curl=curl_init(); #Сохраняем дескриптор сеанса cURL
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
    curl_setopt($curl,CURLOPT_URL,$link);
    curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
    curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($leads));
    curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));
    curl_setopt($curl,CURLOPT_HEADER,false);
    curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
    curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
    curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
    $out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
    $code=curl_getinfo($curl,CURLINFO_HTTP_CODE);
    $code=(int)$code;
    $errors=array(
      301=>'Moved permanently',
      400=>'Bad request',
      401=>'Unauthorized',
      403=>'Forbidden',
      404=>'Not found',
      500=>'Internal server error',
      502=>'Bad gateway',
      503=>'Service unavailable'
    );
    try
    {
      if($code!=200 && $code!=204) {
        throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
      }
    }
    catch(Exception $E)
    {
      die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
    }
  }
}

$log = new Tenders();
$isLogin = $log -> login($user, $AMO_DATA); 
if($isLogin == 'true')
{
  $requestId = $log -> getRequestId($TENDERLAND_FIELDS); 
}
sleep(40);
$xml = $log -> getXML($requestId, $TENDERLAND_FIELDS);
$rawTenders = $log -> xmlToJson($xml["file"]);
$rawTenders = json_decode($rawTenders, true);
sleep(5);

if(array_key_exists ( 'tender' , $rawTenders )){
  $leads = $log -> parseTenders($rawTenders['tender'], $AMO_DATA, $xml["items_count"]);
  echo json_encode($leads), "\n";
  $log -> addLeads($leads, $AMO_DATA);
}
else
{
  echo 'Новых тендеров нет';
}