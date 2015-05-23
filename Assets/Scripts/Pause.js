#pragma strict

var paused : boolean;

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		if (!paused) {
			paused = true;
			Screen.showCursor = true;
			Application.LoadLevelAdditive(0);
		} else {
			paused = false;
			Resume();
		}
	}
}

function Resume () {
	GameObject.Destroy(GameObject.Find("Canvas"));
	GameObject.Destroy(GameObject.Find("EventSystem"));
}