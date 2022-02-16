import cv2 


video_captura = cv2.VideoCapture(0)
faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
sorrisoCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_smile.xml')
olhosCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

while True:
    ret , frame = video_captura.read()


    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = faceCascade.detectMultiScale(
        gray, 
        scaleFactor = 1.1,
        minNeighbors = 5,
        minSize = (30 , 30)
    )

    for (x , y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0,255,0), 2)

    olhos = olhosCascade.detectMultiScale(gray, 1.2, 18)
    for (x , y, w, h) in olhos:
       cv2.rectangle(frame, (x, y), (x+w, y+h), (255,0,0), 2)

    sorriso = sorrisoCascade.detectMultiScale(gray, 1.7, 20)
    for (x , y, w, h) in sorriso:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0,0,255), 2)

    cv2.imshow('video', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video_captura.release()
cv2.destroyAllWindows()
