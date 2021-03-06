<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
$user = [
  'USER_LOGIN'=>'green.landia@mail.ru',
  'USER_HASH'=>'44b177ee540618a38dd30bae14f1d57a4a1c8dfe'
];
$AMO_DATA = [
  'SUBDOMAIN' => 'urman',
  'PIPELINE_ID' => 1068481
];

$lead_name = 'qwe';
$lead_phone = '123';
$lead_comment = 'qwe123';

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

  public function parseTenders($output, $AMO_DATA){
    
    $leads['add'] = [];
      
      $leads['add'][]=[
        'name'=>$output['name'],
        // 'responsible_user_id'=>215309,
        'responsible_user_id'=>2289874,
        'pipeline_id'=>$AMO_DATA["PIPELINE_ID"],
        'status_id' => 19077169,
        'tags' => ['urman.su'],
        'custom_fields'=>[
          [
            'id'=>623239,
            'values'=>[
              [
                'value'=> $output['name']
              ]
            ]
          ],
          [
            'id'=>623253,
            'values'=>[
              [
                'value'=> $output['phone']
              ]
            ]
          ],
          [
            'id'=>623255,
            'values'=>[
              [
                'value'=> $output['comment']
              ]
            ]
          ],
          [
            'id'=>624663,
            'values'=>[
              [
                'value'=> $output['pathname']
              ]
            ]
          ],
          ]
        ];
    return $leads;
  }

  public function parseTask($lead, $AMO_DATA){
    
    $tasks['add'] = [];
      
      $tasks['add'][]=[
        'element_id'=> $lead['id'],
         'element_type'=> 2,
         'complete_till_at'=> strtotime(date('Y-m-d 21:59:59')),
        //  'complete_till_at'=> strtotime("now"),
        //  'complete_till_at'=> strtotime("+1 day"),
         'task_type'=> 1,
         'text'=> "Не забыть позвонить/написать",
         'created_at'=> strtotime("now"),
         'updated_at'=> strtotime("now"),
         'responsible_user_id'=> 2289874,
         'created_by'=> 461661
        ];
 
    return $tasks;
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
      } else {
        // echo $out, "\n";
        $out = json_decode ($out);
                $lead = [
                  'id' => $out ->_embedded -> items[0] -> id
                ];
                return $lead;
      }
    }
    catch(Exception $E)
    {
      die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
    }
  }

  public function addTask($tasks, $AMO_DATA){

    $link='https://'.$AMO_DATA["SUBDOMAIN"].'.amocrm.ru/api/v2/tasks';
    $curl=curl_init(); #Сохраняем дескриптор сеанса cURL
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
    curl_setopt($curl,CURLOPT_URL,$link);
    curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
    curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($tasks));
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
    parse_str($_SERVER['QUERY_STRING'], $output);
    echo $output['name'], "\n";  // value
    echo $output['phone'], "\n"; // foo bar
    echo $output['comment'], "\n"; // baz
    echo $output['pathname'], "\n"; // baz

    $leads = $log -> parseTenders($output, $AMO_DATA);
    // echo json_encode($leads), "\n";
    $lead = $log -> addLeads($leads, $AMO_DATA);
    sleep(1);
    $tasks = $log -> parseTask($lead, $AMO_DATA);
    $log -> addTask($tasks, $AMO_DATA);
}
