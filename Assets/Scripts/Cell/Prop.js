#pragma strict

var speed : float;

function FixedUpdate () {
	if (Input.GetKey(KeyCode.A))
		transform.Rotate(Vector3(0, speed * Time.fixedDeltaTime,0));
	if (Input.GetKey(KeyCode.D))
		transform.Rotate(Vector3(0, speed * Time.fixedDeltaTime,0));
}