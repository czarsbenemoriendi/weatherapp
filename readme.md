https://weatherap-plication.netlify.app/


14.08
- Poprzednio miałem problem z przekazaniem wartości z jednej funkcji do drugiej - udało mi się to roziwązać poprzez 'parse'
- Na chwilę obecną mam problem, żeby na 'clicka' odpalała się kolejka funkcji. Funkcja o nazwie getWeather nie przekazuje dalej danych. Natomiast event click na buttonie działa poprawnie, loguje w konsoli zawartość inputa.
- Wyskoczyły mi w konsoli errory, przeraziłem się co się dzieje, natomiast po jakimś czasie przy pomocy console.logów udało mi się zlokalizować problem.

    "Your account is temporary blocked due to exceeding of requests limitation of your subscription type. Please choose the proper subscription"

15.08
- W końcu udało mi się zespolić wszystkie funkcje ze sobą, fajnie wyszło. Został tylko obrazek.
- W procesie tworzenia obrazka okazało się, że w momencie wywoływania funkcji (stworzyłem funkcję changeImg) do argumentu weatherID jest przypisywana wartość undefined
```
changeImg(weatherID);
``` 

Nie umiem obejść tego problemu więc po prostu stworzę ifa w refreshData

Update - nie trzeba było przekazywać argumentu podczas wywoływania funkcji. 

16.08
Projekt raczej skończony, parę drobnych szlifów i przesyłam go na netlify oraz GitHuba.
- Zauważyłem drobny błąd, w momencie kiedy wyszuka się miasto, aplikacja pokaże pogodę, następnie w inputa wpisze się niepoprawną nazwę miasta i wyszuka, aplikacja zwróci error, ale po ponownym wyszukaniu miasta przez ułamek sekundy widać poprzednio szukane miasto. Wydaje mi się, że rozwiązaniem tego problemu może być pętla natomiast nie mam pojęcia jak powinienem to zoptymalizować 

- Dziwne jest również to, że czasem jak szuka się miasto tj Kraków w nazwie miasta pokazuje się zupełnie inna nazwa natomiast koordynaty, które pobiera funkcja 'geocodingAPIfetch' wskazują kraków
