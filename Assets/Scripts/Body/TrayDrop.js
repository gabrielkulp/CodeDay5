#pragma strict

var tumorCenter : Transform;
var target : GameObject;
var zoom : boolean;

function Update () {
	if (collider2D.OverlapPoint(tumorCenter.position)) {
		tumorCenter.GetComponent(typeof(TumorDrag)).enabled = false;
		zoom = true;
	}
	if (zoom) {
		Camera.main.orthographicSize = Mathf.Lerp(Camera.main.orthographicSize, 1.9,0.07);
		Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position,
		  Vector3(target.transform.position.x,target.transform.position.y,Camera.main.transform.position.y), 0.07);
		if (Camera.main.orthographicSize <= 2) {
			PlayerPrefs.SetInt("lastLevel",2);
			Application.LoadLevel(2);
		}
	}
}