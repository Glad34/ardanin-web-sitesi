# Arda İlci - Gayrimenkul Danışmanı Web Sitesi

Bu proje, Luxury (Lüks) stilinde tasarlanmış modüler bir web sitesi iskeletidir.

## Proje Yapısı

- `index.html`: Ana iskelet dosyası. Bileşenleri `data-component` attribute'u ile içerir.
- `components/`: Tekrar kullanılabilir HTML parçalarını (header, footer, hero vb.) barındıran klasör.
- `assets/`: CSS, JavaScript ve resim gibi statik dosyaları içerir.
  - `css/style.css`: Sitenin stil dosyası. Koyu gri ve altın renk temasına sahiptir.
  - `js/main.js`: Bileşenleri dinamik olarak yükleyen ve hamburger menü gibi interaktif özellikleri yöneten ana JavaScript dosyası.
  - `images/`: `hero-desktop.gif` ve `hero-mobile.gif` dosyalarının bulunması gereken klasör.

## Çalıştırma

Projenin düzgün çalışması için bir web sunucusu (örneğin, VS Code Live Server eklentisi veya basit bir Python sunucusu) üzerinden çalıştırılması gerekmektedir. Çünkü `fetch()` API'si `file://` protokolü üzerinden çalışmaz.

bash
# Proje kök dizininde bir terminal açın ve aşağıdaki komutu çalıştırın (Python 3 kurulu olmalı)
python -m http.server


Ardından tarayıcınızda `http://localhost:8000` adresine gidin.