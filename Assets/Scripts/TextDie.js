#pragma strict

var timer : float;

function Update () {
	timer -= Time.deltaTime;
	if (timer <= 0.0)
		GameObject.Destroy(this.gameObject);
}