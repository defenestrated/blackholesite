/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

console.log("hi")

var tw = $(".intro h1").width();
console.log(tw)

$(".intro h2, p.description").css({
  "max-width": tw + "px"
})

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);