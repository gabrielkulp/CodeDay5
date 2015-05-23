#pragma strict

private var last : int;

function Start () {
	DontDestroyOnLoad (gameObject);
}

function Update () {
	if (Application.loadedLevel > 2)
		GameObject.DestroyImmediate(this.gameObject);
	
	if (last != Application.loadedLevel) {
		gameObject.name = gameObject.name + " old";
		GameObject.Destroy(GameObject.Find("Audio Source"));
	}
	
	if (Application.loadedLevel > 2)
		GameObject.Destroy(this.gameObject);
	
	last = Application.loadedLevel;
}