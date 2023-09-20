/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	qlik.theme.apply('unimed-bh 2023');

	//callbacks -- inserted here --
	function function_percent_2(reply, app){
		console.log(reply)
	}

	function function_percent_1(reply, app){console.log(reply)}

	function function_pizza(reply, app){
		//console.log(reply)
		const data = reply.qHyperCube.qDataPages[0].qMatrix
		//console.log(`${data[0][0].qText} = ${data[0][1].qText}`)
		
		//exibe cada elemento do array data
		$.each(data,function(k, val){
			console.log(`${val[0].qText} = ${val[1].qText}`)
			$("#hypercube").append('<tr><td>'+ val[0].qText + '</td>' + '<td>' + val[1].qText + '</td></tr>');
		})
		
		const ctx = document.getElementById("hypercube2");
		
		ctx.append('<h1> Teste </h1>');
  
	}


	//open apps -- inserted here --
	var app1 = qlik.openApp('224deda0-2ae3-48d8-ac4c-b0e70f589e69', config);

	var app = qlik.openApp('53a9ded4-f994-46cd-a4b8-ce7651240ada', config);

	//get objects -- inserted here --
	app1.getObject('QV09','RpjTE');
	app1.getObject('QV08','gwfxcE');
	app1.getObject('QV07','jeUGp');
	app1.getObject('QV04','hpZ');
	app1.getObject('QV03','QJFt');
	app1.getObject('QV02','pXcqNMN');	
	app1.getObject('QV01','mwayMDk');
	app1.getObject('QV06','JgmP');
	app1.getObject('QV05','FsQBJdm');
	
let scale = 0;
	
	//create cubes and lists -- inserted here --
	app1.createCube({
	"qInitialDataFetch": [
		{
			"qHeight": 20,
			"qWidth": 2
		}
	],
	"qDimensions": [
		{
			"qDef": {
				"qFieldDefs": [
					"[Área]"
				]
			},
			"qNullSuppression": true,
			"qOtherTotalSpec": {
				"qOtherMode": "OTHER_OFF",
				"qSuppressOther": true,
				"qOtherSortMode": "OTHER_SORT_DESCENDING",
				"qOtherCounted": {
					"qv": "5"
				},
				"qOtherLimitMode": "OTHER_GE_LIMIT"
			}
		}
	],
	"qMeasures": [
		{
			"qDef": {
				"qDef": "Count(Ano)"
			},
			"qLabel": "Count(Ano)",
			"qLibraryId": null,
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		}
	],
	"qSuppressZero": false,
	"qSuppressMissing": false,
	"qMode": "S",
	"qInterColumnSortOrder": [],
	"qStateName": "$"
	},function_pizza);
	app1.createCube({
	"qInitialDataFetch": [
		{
			"qHeight": 20,
			"qWidth": 2
		}
	],
	"qDimensions": [
		{
			"qDef": {
				"qFieldDefs": [
					"Count({<[Atend 5 dias] = {'Sim'}>}[Manifestação])\r\n\n/\n\ncount([Atend 5 dias])\n"
				]
			},
			"qNullSuppression": true,
			"qOtherTotalSpec": {
				"qOtherMode": "OTHER_OFF",
				"qSuppressOther": true,
				"qOtherSortMode": "OTHER_SORT_DESCENDING",
				"qOtherCounted": {
					"qv": "5"
				},
				"qOtherLimitMode": "OTHER_GE_LIMIT"
			}
		}
	],
	"qMeasures": [
		{
			"qDef": {
				"qDef": "Count({<[Atend 5 dias] = {'Sim'}>}[Manifestação])\r\n\n/\n\ncount([Atend 5 dias])\n"
			},
			"qLabel": "Count({<[Atend 5 dias] = {'Sim'}>}[Manifestação])\r\n\n/\n\ncount([Atend 5 dias])\n",
			"qLibraryId": null,
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		}
	],
	"qSuppressZero": false,
	"qSuppressMissing": false,
	"qMode": "S",
	"qInterColumnSortOrder": [],
	"qStateName": "$"
	},function_percent_1);
	app1.createCube({
	"qInitialDataFetch": [
		{
			"qHeight": 20,
			"qWidth": 2
		}
	],
	"qDimensions": [
		{
			"qDef": {
				"qFieldDefs": [
					"Atend7"
				]
			},
			"qNullSuppression": true,
			"qOtherTotalSpec": {
				"qOtherMode": "OTHER_OFF",
				"qSuppressOther": true,
				"qOtherSortMode": "OTHER_SORT_DESCENDING",
				"qOtherCounted": {
					"qv": "5"
				},
				"qOtherLimitMode": "OTHER_GE_LIMIT"
			}
		}
	],
	"qMeasures": [
		{
			"qDef": {
				"qDef": "Count({<[Atend 7 dias] = {'Sim'}>}[Manifestação])\r\n\n/\n\n\ncount([Atend 7 dias])"
			},
			"qLabel": "Count({<[Atend 7 dias] = {'Sim'}>}[Manifestação])\r\n\n/\n\n\ncount([Atend 7 dias])",
			"qLibraryId": null,
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		}
	],
	"qSuppressZero": false,
	"qSuppressMissing": false,
	"qMode": "S",
	"qInterColumnSortOrder": [],
	"qStateName": "$"
	},function_percent_2);
} );