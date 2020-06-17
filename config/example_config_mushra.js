// configure the test here
var TestConfig = {
  "TestName": "SATB Source Separation Listening Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "./audio/",
  "Testsets": [
    //    
    {
      "Name": "Soprano - 1 Singer per Part",
      "TestID": "id1_11",
      "Files": {
            "Reference": "usecase1/ref_soprano.wav",
            "1": "usecase1/soprano_cunet_da.wav",
            "2": "usecase1/soprano_umix.wav",
            "3": "usecase1/soprano_unet.wav",
            "4": "usecase1/soprano_cunet_ds_g_x2.wav",
            "5": "usecase1/soprano_cunet_ds_l.wav",
            "6": "usecase1/soprano_cunet_ds_enc.wav",
            "7": "usecase1/soprano_wave.wav",
            "8": "usecase1/soprano_cunet_ds_g.wav",
        }
    },
    {
      "Name": "Alto - 1 Singer per Part",
      "TestID": "id1_12",
      "Files": {
            "Reference": "usecase1/ref_soprano.wav",
            "1": "usecase1/alto_cunet_da.wav",
            "2": "usecase1/alto_umix.wav",
            "3": "usecase1/alto_unet.wav",
            "4": "usecase1/alto_cunet_ds_g_x2.wav",
            "5": "usecase1/alto_cunet_ds_l.wav",
            "6": "usecase1/alto_cunet_ds_enc.wav",
            "7": "usecase1/alto_wave.wav",
            "8": "usecase1/alto_cunet_ds_g.wav",
        }
    },
    {
      "Name": "Tenor - 1 Singer per Part",
      "TestID": "id1_13",
      "Files": {
            "Reference": "usecase1/ref_tenor.wav",
            "1": "usecase1/tenor_cunet_da.wav",
            "2": "usecase1/tenor_umix.wav",
            "3": "usecase1/tenor_unet.wav",
            "4": "usecase1/tenor_cunet_ds_g_x2.wav",
            "5": "usecase1/tenor_cunet_ds_l.wav",
            "6": "usecase1/tenor_cunet_ds_enc.wav",
            "7": "usecase1/tenor_wave.wav",
            "8": "usecase1/tenor_cunet_ds_g.wav",
        }
    },
    {
      "Name": "Bass - 1 Singer per Part",
      "TestID": "id1_14",
      "Files": {
            "Reference": "usecase1/ref_bass.wav",
            "1": "usecase1/bass_cunet_da.wav",
            "2": "usecase1/bass_umix.wav",
            "3": "usecase1/bass_unet.wav",
            "4": "usecase1/bass_cunet_ds_g_x2.wav",
            "5": "usecase1/bass_cunet_ds_l.wav",
            "6": "usecase1/bass_cunet_ds_enc.wav",
            "7": "usecase1/bass_wave.wav",
            "8": "usecase1/bass_cunet_ds_g.wav",
        }
    },
    //    
Tenor
  ]
}
