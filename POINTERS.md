rename all classnames and ids from top to bottom for
html
css
js
get the right convention from bootstrap

collapsed attribute = to identify whether the element is collapsed or not

.hamburger-menu -> replaced with
	html: .border-0 .p-0 
	html: svg icons went straight to html
	css: hamburger-menu:focus -> navbar-toggler:focus
	js: removed collapse attribute -> will now use aria-expanded attribute instead

-.navmenu-items -> replaced with
	html: .p-4 .p-lg-0
	css: removed all style
--
---.nav-item-main
----#connectNav
-----.nav-item-main #connectBtn
-----.nav-links
-.nav-account
--
---#login
---#signup