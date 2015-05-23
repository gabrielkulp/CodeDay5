#pragma strict

var index : int;
var controller : GameObject;
var images : Sprite[];
var zoom : boolean;

function Start () {
	var spr : SpriteRenderer;
	spr = GetComponent(typeof(SpriteRenderer));
	spr.sprite = images[PlayerPrefs.GetInt("count",0)];
	
}

function Update () {
	if (zoom) {
		Camera.main.orthographicSize = Mathf.Lerp(Camera.main.orthographicSize, 1.9,0.07);
		Camera.main.transform.position = Vector3.Lerp(Camera.main.transform.position,
		  Vector3(transform.position.x,transform.position.y,Camera.main.transform.position.y), 0.07);
		if (Camera.main.orthographicSize <= 2) {
			PlayerPrefs.SetInt(gameObject.name+"Done",1);
			PlayerPrefs.SetInt("lastLevel",3+PlayerPrefs.GetInt("count",0));
			Application.LoadLevel(3+PlayerPrefs.GetInt("count",0));
		}
	}
	
}

function OnMouseDown () {
	if (Input.GetMouseButtonDown(0)) {
		zoom = true;
	}
}