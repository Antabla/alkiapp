<?php /** 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d4f828d2e8ab75d05c7281e
*
* You will get 10% discount for each one of your friends
* 
*/
?>
<?php
	require_once './db/dbalkiapp_dbManager.php';
	
/*
 * SCHEMA DB Lessee
 * 
	{
		email: {
			type: 'String', 
			required : true
		},
		iduser: {
			type: 'Integer', 
			required : true
		},
		lastname: {
			type: 'String', 
			required : true
		},
		name: {
			type: 'String', 
			required : true
		},
		phone: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/lessee',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'email'	=> $body->email,
		'iduser'	=> $body->iduser,
		'lastname'	=> $body->lastname,
		'name'	=> $body->name,
		'phone'	=> $body->phone,
			);

	$obj = makeQuery("INSERT INTO lessee (_id, email, iduser, lastname, name, phone )  VALUES ( null, :email, :iduser, :lastname, :name, :phone   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/lessee/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM lessee WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/lessee/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM lessee WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/lessee',	function () use ($app){
	makeQuery("SELECT * FROM lessee");
});


//CRUD - EDIT

$app->post('/lessee/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'email'	    => $body->email,
		'iduser'	    => $body->iduser,
		'lastname'	    => $body->lastname,
		'name'	    => $body->name,
		'phone'	    => $body->phone	);

	$obj = makeQuery("UPDATE lessee SET  email = :email,  iduser = :iduser,  lastname = :lastname,  name = :name,  phone = :phone   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>