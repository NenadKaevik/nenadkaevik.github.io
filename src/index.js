import 'jquery/src/jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import '@fortawesome/fontawesome-free/js/all';
import './sass/styles.scss';

let gravatar = require('gravatar');
let url = gravatar.url('nenadkaevik@gmail.com', {protocol: 'https', s: '100'});

$(document).ready(function(){
    //$(".avatar img").attr("src",url);
});
