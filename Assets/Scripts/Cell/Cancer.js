#pragma strict

var waiting : boolean;
var timer : float;
var spawnDist : float;
var prefab : GameObject;
var clusterScript : Cluster;
var stickForce : float;
var dead : boolean;

function Start () {
	clusterScript = transform.parent.GetComponent(typeof(Cluster));
	timer = Random.Range(60.0/clusterScript.splitRate.x, 60.0/clusterScript.splitRate.y);
}

function Update () {
	if (dead)
		return;
	waiting = (clusterScript.splitRate.y == 0.0);
	
	if (!waiting)
		timer -= Time.deltaTime;
	
	if (timer <= 0.0) {
		if (clusterScript.splitRate.y != 0.0) {
			waiting = false;
			var split : GameObject;
			audio.Play();
			split = GameObject.Instantiate(prefab,transform.position + spawnDist * Random.insideUnitCircle.normalized,transform.rotation);
			split.transform.localEulerAngles.z = Random.Range(0,360);
			split.transform.parent = transform.parent;
			timer = Random.Range(60.0/clusterScript.splitRate.x, 60.0/clusterScript.splitRate.y);
		}
	}
}

function FixedUpdate () {
	if (!dead)
		rigidbody2D.AddForce(-transform.localPosition.normalized * stickForce);
	else {
		//if dead
		transform.position.z += Time.fixedDeltaTime;
		var pos = transform.position.z/5.0;
		renderer.material.color = Color.Lerp(Color.gray,Color.clear,pos);
		if (pos >= 1.0)
			GameObject.Destroy(this.gameObject);
	}
}

function Die () {
	GameObject.Destroy(this.collider2D);
	dead = true;
}