/**
 * Created by Frank Qiu on 2016/11/3.
 */
'use strict';


//var mongoose = require('mongoose'),
var User = require('../models/user'),
    _ = require('lodash');


/*����һ��user����*/


exports.create = function (req, res) {

    console.log('This  is what i want!');

    var data = req.body;
    console.log(req.body + '%%%%%%%%%req content');
    console.log(data + '@@@@@@@@data');

    User.create(data, function (err) {
        if (err) {
            console.log(err);
        }
    });

};


/*��ʾ���е�����*/


exports.all = function (req, res) {


    //User.query();

    console.log('could you reach this function?');



}