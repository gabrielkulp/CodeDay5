#pragma strict

var force : float;
var turnForce : float;

function Update () {
	if (Input.GetKey(KeyCode.A))
		rigidbody2D.AddTorque(turnForce);
	if (Input.GetKey(KeyCode.D))
		rigidbody2D.AddTorque(-turnForce);
	if (Input.GetKey(KeyCode.A) && Input.GetKey(KeyCode.D))
		rigidbody2D.AddRelativeForce(Vector2(0,force));
}