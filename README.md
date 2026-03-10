# Post It O Clock

Una aplicación móvil para gestionar recordatorios y notas al estilo post-it con alarmas.

## Demo

<video src="https://github.com/user-attachments/assets/1393e9b6-a206-41ac-a396-d4596721e753" controls width="320"></video>

## Autora

**Marjorie Ibañez**
[Md.ibanezc1@uniandes.edu.co](mailto:Md.ibanezc1@uniandes.edu.co)

## Tecnologías

- Next.js + React
- Tailwind CSS + shadcn/ui
- Capacitor (Android)

## Generar APK

```bash
npm run build:mobile
ANDROID_HOME=/Users/juanhernan/android-sdk ./android/gradlew -p android assembleDebug
```

El APK se genera en `android/app/build/outputs/apk/debug/app-debug.apk`.
