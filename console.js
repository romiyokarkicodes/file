console.log('wapo_login_id: ' + (document.cookie.match(/wapo_login_id=([^;]+)/) ? document.cookie.match(/wapo_login_id=([^;]+)/)[1] : 'Not Found') + '\n\nwapo_secure_login_id: ' + (document.cookie.match(/wapo_secure_login_id=([^;]+)/) ? document.cookie.match(/wapo_secure_login_id=([^;]+)/)[1] : 'Not Found'));
module.exports = function() {};
