#pragma strict

var snap : float;
var follow : GameObject;

function FixedUpdate () {
	transform.position.x = Mathf.Lerp(transform.position.x, follow.transform.position.x, snap);
	transform.position.y = Mathf.Lerp(transform.position.y, follow.transform.position.y, snap);
}