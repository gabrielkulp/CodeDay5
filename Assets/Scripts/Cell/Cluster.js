#pragma strict

var pushForce : float;
var pushDist : float;
var splitPar : Vector2;
var splitRate : Vector2;
var splitFalloff : AnimationCurve;

function Start () {
	splitRate = splitPar;
}

function Update () {
	splitRate = splitPar * splitFalloff.Evaluate(transform.childCount);
	if (transform.childCount == 0)
		GameObject.Destroy(this.gameObject);
}

function FixedUpdate () {
	if (transform.position.magnitude <= pushDist)
		rigidbody2D.AddForce(transform.localPosition.normalized * pushForce);
}