#pragma strict

var spawnTime : float;
var spawnDist : float;
var timer : float;
var cluster : GameObject;
var cancer : GameObject;

function Start () {
	Screen.showCursor = false;
}

function Update () {
	if (transform.childCount == 0) {
		End();
	} else {
		if (transform.GetChild(0).name == "CenterCluster")
			timer -= Time.deltaTime;
		if (timer <= 0.0) {
			timer = spawnTime;
			var thisCluster : GameObject;
			thisCluster = GameObject.Instantiate(cluster, transform.position + spawnDist * Random.insideUnitCircle.normalized, transform.rotation);
			thisCluster.transform.parent = this.transform;
			GameObject.Instantiate(cancer, thisCluster.transform.position, thisCluster.transform.rotation).transform.parent = thisCluster.transform;
		}
	}
}

function End () {
	if (PlayerPrefs.GetInt("count",0) == 2)
		Application.LoadLevel(6);
	else
		Application.LoadLevel(2);
}