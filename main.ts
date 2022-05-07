input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 50)
    neZha.setMotorSpeed(neZha.MotorList.M4, 50)
})
input.onButtonPressed(Button.B, function () {
    neZha.stopAllMotor()
})
neZha.setMotorSpeed(neZha.MotorList.M1, 0)
neZha.setMotorSpeed(neZha.MotorList.M4, 0)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    PlanetX_Display.showUserNumber(1, PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm))
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 20) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 50)
            neZha.setMotorSpeed(neZha.MotorList.M4, 50)
        }
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 0)
            neZha.setMotorSpeed(neZha.MotorList.M4, 50)
        }
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 50)
            neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        }
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 50)
            neZha.setMotorSpeed(neZha.MotorList.M4, 50)
        }
    } else {
        basic.showIcon(IconNames.No)
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
    }
})
