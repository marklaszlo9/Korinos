var username = "[your_username]";
var hostname = "[your_mail_account_domain]";
var linktext = username + "@" + hostname ;

function provider() {
  document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>");
}
