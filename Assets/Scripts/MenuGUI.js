#pragma strict

function New () {
	audio.Play();
	Application.LoadLevel(1);
	PlayerPrefs.SetInt("count", 0);
	PlayerPrefs.SetInt("ADone", 0);
	PlayerPrefs.SetInt("BDone", 0);
	PlayerPrefs.SetInt("CDone", 0);
}

function Continue () {
	audio.Play();
	if (GameObject.Find("Pause"))
		GameObject.Find("Pause").GetComponent(typeof(Pause)).Resume();
	else
		Application.LoadLevel(PlayerPrefs.GetInt("lastLevel",1));
}

function Quit () {
	audio.Play();
	Application.Quit();
	#if UNITY_EDITOR
		EditorApplication.isPlaying = false;
	#endif
}