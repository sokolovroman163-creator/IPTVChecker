export type Language = "en" | "ru";

const STORAGE_KEY = "iptv-checker-language";

const RU: Record<string, string> = {
  "Language": "Язык",
  "Choose interface language.": "Выберите язык интерфейса.",
  "English": "English",
  "Russian": "Русский",
  "General": "Основные",
  "Scanning": "Проверка",
  "Media": "Медиа",
  "Network": "Сеть",
  "Advanced": "Дополнительно",
  "Theme": "Тема",
  "Choose system, light, or dark appearance.": "Выберите системную, светлую или тёмную тему.",
  "System": "Системная",
  "Light": "Светлая",
  "Dark": "Тёмная",
  "Automatic": "Автоматически",
  "Shown": "Показывать",
  "Hidden": "Скрывать",
  "Disabled": "Отключено",
  "Auto": "Авто",
  "None": "Нет",
  "Linear": "Линейная",
  "Exponential": "Экспоненциальная",
  "Channel logo size": "Размер логотипа канала",
  "Controls logo size in the channel name column.": "Размер логотипа в столбце с названием канала.",
  "Small (16px)": "Маленький (16px)",
  "Medium (24px)": "Средний (24px)",
  "Large (36px)": "Большой (36px)",
  "Huge (48px)": "Очень большой (48px)",
  "Title bar": "Строка заголовка",
  "External player": "Внешний плеер",
  "System Default": "Системный по умолчанию",
  "Profile video bitrate": "Измерять битрейт видео",
  "Captures 10s of each stream for accurate video bitrate values. Much slower.": "Записывает 10 секунд каждого потока для точного измерения битрейта. Проверка заметно медленнее.",
  "Show source filter bar": "Показывать фильтр источника",
  "Display the regex source filter bar above the table.": "Показывать строку regex-фильтра над таблицей.",
  "Hide VOD / series entries": "Скрывать VOD / сериалы",
  "Auto-reveal report panel": "Автоматически открывать отчёт",
  "Slide in the playlist report near scan completion.": "Открывать отчёт о плейлисте ближе к завершению проверки.",
  "Separate placeholder status": "Отдельный статус заглушек",
  "Show header button text": "Показывать текст кнопок в заголовке",
  "Scan completion notifications": "Уведомления о завершении проверки",
  "Show native notifications when scans complete or are cancelled.": "Показывать системные уведомления после завершения или отмены проверки.",
  "Automatic update checks": "Автоматическая проверка обновлений",
  "Default app for .m3u/.m3u8": "Приложение по умолчанию для .m3u/.m3u8",
  "Open playlist files in IPTV Checker by default.": "Открывать файлы плейлистов в IPTV Checker по умолчанию.",
  "Scan Presets": "Профили проверки",
  "Preset name": "Название профиля",
  "Load": "Загрузить",
  "Save": "Сохранить",
  "Save as default": "Сохранить по умолчанию",
  "Mark Default": "Назначить по умолчанию",
  "Clear Default": "Сбросить значение по умолчанию",
  "Rename": "Переименовать",
  "Delete": "Удалить",
  "Timeout (seconds)": "Тайм-аут (сек.)",
  "Extended Timeout (seconds)": "Расширенный тайм-аут (сек.)",
  "Concurrency": "Параллельные проверки",
  "Max Retries": "Максимум повторов",
  "Retry Backoff": "Задержка повторов",
  "Low FPS threshold": "Порог низкого FPS",
  "Streams below this FPS are flagged as low framerate.": "Потоки ниже этого FPS помечаются как низкая частота кадров.",
  "User agent": "User-Agent",
  "HTTP user agent string sent with stream requests.": "Строка User-Agent, отправляемая при запросах потоков.",
  "Skip screenshots": "Не делать скриншоты",
  "Disable frame captures for faster checks.": "Отключить захват кадров для более быстрой проверки.",
  "Screenshot format": "Формат скриншотов",
  "WebP is faster and smaller. PNG is lossless.": "WebP быстрее и компактнее. PNG сохраняет изображение без потерь.",
  "Auto-capture sample clips": "Автоматически сохранять тестовые клипы",
  "Sample clip duration": "Длительность тестового клипа",
  "Sample clip duration in seconds": "Длительность тестового клипа в секундах",
  "Save media to": "Сохранять медиа в",
  "Browse": "Выбрать",
  "Clear": "Очистить",
  "Temp Media Cache": "Кэш временных медиафайлов",
  "Media Retention": "Срок хранения медиа",
  "Low Space Threshold (GB)": "Порог свободного места (ГБ)",
  "Proxy file": "Файл прокси",
  "Confirm geoblocks with proxies": "Проверять геоблокировку через прокси",
  "Re-test geoblocked streams through your proxy list.": "Повторно проверять геоблокированные потоки через список прокси.",
  "Skip certificate verification (insecure)": "Не проверять сертификаты (небезопасно)",
  "Accept invalid/self-signed TLS certificates during stream checks.": "Принимать недействительные и самоподписанные TLS-сертификаты при проверке потоков.",
  "Rank working streams by": "Сортировать рабочие потоки по",
  "Resolution": "Разрешение",
  "Frame rate": "Частота кадров",
  "Bitrate": "Битрейт",
  "Low latency": "Низкая задержка",
  "Fix order compares streams on each signal in turn; a tie moves on to the next.": "При исправлении порядка потоки сравниваются по каждому параметру; при равенстве используется следующий.",
  "Dead streams": "Нерабочие потоки",
  "Unlinked streams stay in Dispatcharr and can be added back.": "Отвязанные потоки остаются в Dispatcharr и могут быть добавлены обратно.",
  "Write probe results to Dispatcharr": "Записывать результаты проверки в Dispatcharr",
  "Keep Xtream connection notice visible": "Не скрывать уведомление о подключениях Xtream",
  "Keep the detected max-connections banner visible until you dismiss it.": "Показывать найденный лимит подключений, пока вы сами не закроете уведомление.",
  "Log Level": "Уровень журнала",
  "Error": "Ошибка",
  "Warning": "Предупреждение",
  "Info": "Информация",
  "Debug": "Отладка",
  "Trace": "Трассировка",
  "Scan History Retention": "Хранение истории проверок",
  "ffmpeg / ffprobe": "ffmpeg / ffprobe",
  "ffprobe timeout (seconds)": "Тайм-аут ffprobe (сек.)",
  "ffmpeg bitrate timeout (seconds)": "Тайм-аут битрейта ffmpeg (сек.)",
  "Unlink": "Отвязать",
  "Move to end": "Переместить в конец",
  "Could not save one or more changes:": "Не удалось сохранить одно или несколько изменений:",
  "No playlist loaded": "Плейлист не загружен",
  "Open File": "Открыть файл",
  "Open Folder": "Открыть папку",
  "Add URL": "Добавить URL",
  "Add Xtream": "Добавить Xtream",
  "Add Dispatcharr": "Добавить Dispatcharr",
  "Saved Playlists": "Сохранённые плейлисты",
  "Manage…": "Управление…",
  "Open Recent": "Недавние",
  "Scan": "Проверить",
  "Mode": "Режим",
  "Scope": "Область",
  "Open": "Открыть",
  "Open URL": "Открыть URL",
  "Open Xtream": "Открыть Xtream",
  "Open Dispatcharr": "Открыть Dispatcharr",
  "Table": "Таблица",
  "Guide": "Телегид",
  "Stopping Scan": "Остановка проверки",
  "Pause Scan": "Приостановить проверку",
  "Resume Scan": "Продолжить проверку",
  "Stop Scan": "Остановить проверку",
  "Scan options": "Параметры проверки",
  "Verify catch-up": "Проверить архив",
  "Open Playlist Source": "Открыть источник плейлиста",
  "Open playlist source": "Открыть источник плейлиста",
  "Save Playlist": "Сохранить плейлист",
  "History": "История",
  "Settings": "Настройки",
  "Channel group": "Группа каналов",
  "Channel status": "Статус канала",
  "Search channels": "Поиск каналов",
  "Search...": "Поиск...",
  "Source Filter (regex)": "Фильтр источника (regex)",
  "Applying...": "Применение...",
  "Apply": "Применить",
  "Regex quick reference": "Краткая справка по regex",
  "Matches are case-insensitive. Lookahead filters are supported.": "Регистр не учитывается. Поддерживаются lookahead-условия.",
  "Click Apply to reload the current source. Scan applies pending changes automatically.": "Нажмите «Применить», чтобы перезагрузить текущий источник. При запуске проверки изменения применяются автоматически.",
  "Exporting...": "Экспорт...",
  "Export": "Экспорт",
  "Scan in progress — exported files will contain partial results": "Проверка выполняется — экспортированные файлы будут содержать неполные результаты",
  "Export Scope": "Область экспорта",
  "Export CSV": "Экспорт CSV",
  "Split Playlists": "Разделить плейлисты",
  "Renamed Playlist": "Переименованный плейлист",
  "Export M3U/M3U8": "Экспорт M3U/M3U8",
  "Real Catch-up Only (M3U)": "Только подтверждённый архив (M3U)",
  "Playlist Without Fake Catch-up": "Плейлист без ложного архива",
  "Export Scan Log (JSON)": "Экспорт журнала проверки (JSON)",
  "Only channels whose archive answered, with the measured depth written back": "Только каналы с рабочим архивом, с записанной измеренной глубиной",
  "The full list with catch-up attributes removed from fake channels": "Полный список, где у каналов с ложным архивом удалены параметры catch-up",
  "No selected channels to export.": "Нет выбранных каналов для экспорта.",
  "No channels match the current filters.": "Нет каналов, соответствующих текущим фильтрам.",
  "No channels available to export.": "Нет каналов для экспорта.",
  "No verified catch-up channels to export.": "Нет проверенных каналов с архивом для экспорта.",
  "Run a scan first to generate a scan log.": "Сначала запустите проверку, чтобы создать журнал.",
  "Loading...": "Загрузка...",
  "Now": "Сейчас",
  "Failed": "Ошибка",
  "Play live": "Смотреть эфир",
  "No channels match the current filters": "Нет каналов, соответствующих текущим фильтрам",
  "Download…": "Скачать…",
  "Test Catch-up": "Проверить архив",
  "Scan History": "История проверок",
  "Completed scans are saved automatically and compared against the previous run.": "Завершённые проверки сохраняются автоматически и сравниваются с предыдущим запуском.",
  "Refresh": "Обновить",
  "No completed scans are saved for this playlist yet.": "Для этого плейлиста ещё нет сохранённых завершённых проверок.",
  "No comparable previous scan in the same scope.": "Нет предыдущей проверки в той же области для сравнения.",
  "Scan history": "История проверок",
  "Close history panel": "Закрыть панель истории",
  "Help": "Справка",
  "Keyboard Shortcuts": "Горячие клавиши",
  "Keyboard shortcuts": "Горячие клавиши",
  "Close keyboard shortcuts": "Закрыть список горячих клавиш",
  "Table Navigation": "Навигация по таблице",
  "Selection": "Выбор",
  "Scan & Playback": "Проверка и воспроизведение",
  "Browse Catch-up": "Просмотр архива",
  "Preview": "Предпросмотр",
  "Open in External Player": "Открыть во внешнем плеере",
  "Visible Columns": "Видимые столбцы",
  "Reset to Defaults": "Сбросить настройки",
  "GO LIVE": "В ЭФИР",
  "Retry": "Повторить",
  "Open External": "Открыть во внешнем плеере",
  "Stop": "Стоп",
  "Picture-in-Picture": "Картинка в картинке",
  "Fullscreen": "На весь экран",
  "Session activity": "Активность сеанса",
  "Buffer ahead": "Запас буфера",
  "Technical counters": "Технические счётчики",
  "Recent details are bounded. Summary totals cover the whole session.": "Недавние события ограничены по объёму. Итоговые значения охватывают весь сеанс.",
  "PLAYBACK OBSERVATIONS": "НАБЛЮДЕНИЯ ВОСПРОИЗВЕДЕНИЯ",
  "Playback diagnostics": "Диагностика воспроизведения",
  "Recent buffer depth": "Недавняя глубина буфера",
  "Playlist Report": "Отчёт о плейлисте",
  "Health Score": "Оценка состояния",
  "Ping": "Пинг",
  "Content": "Контент",
  "Quality": "Качество",
  "Catch-up": "Архив",
  "Content Counts": "Количество контента",
  "Live": "Эфир",
  "Movies": "Фильмы",
  "Series": "Сериалы",
  "Total": "Всего",
  "Language Distribution": "Распределение языков",
  "No language metadata detected.": "Метаданные о языке не обнаружены.",
  "Video Quality Distribution": "Распределение качества видео",
  "EPG Coverage": "Покрытие EPG",
  "real": "рабочий",
  "fake": "ложный",
  "shallower": "меньшая глубина",
  "advertised": "заявлено",
  "Why fake": "Почему ложный",
  "Verified depth": "Проверенная глубина",
  "Median archive start": "Медианное начало архива",
  "Average live start": "Среднее время запуска эфира",
  "Export playlist, fake flags stripped": "Экспорт плейлиста без признаков ложного архива",
  "Technical Details": "Технические данные",
  "Quality (HD+4K)": "Качество (HD+4K)",
  "Protocol": "Протокол",
  "Security": "Безопасность",
  "Xtream Expiration": "Срок действия Xtream",
  "Total content": "Всего контента",
  "Alive / Dead / Geo": "Рабочие / Нерабочие / Геоблок",
  "Placeholder": "Заглушка",
  "Ping P50": "Пинг P50",
  "Codec Distribution": "Распределение кодеков",
  "No codec data yet.": "Данных о кодеках пока нет.",
  "Hide report": "Скрыть отчёт",
  "<1 d": "<1 дн.",
  "1-2 d": "1–2 дн.",
  "3-6 d": "3–6 дн.",
  "7 d": "7 дн.",
  "8+ d": "8+ дн.",
  "empty": "пусто",
  "serves live": "отдаёт эфир",
  "http error": "ошибка HTTP",
  "timeout": "тайм-аут",
  "unreachable": "недоступен",
  "Fake catch-up.": "Ложный архив.",
  "Watch from here": "Смотреть отсюда",
  "Archive": "Архив",
  "Loading guide...": "Загрузка телегида...",
  "Catch-up programmes": "Передачи из архива",
  "Stop casting": "Остановить трансляцию",
  "Active": "Активно",
  "Cast to a device": "Трансляция на устройство",
  "Refresh devices": "Обновить устройства",
  "Paused": "Пауза",
  "Stopping": "Остановка"
};

type TextState = { original: string; translated: string };
type AttrState = { original: string; translated: string };

const textState = new WeakMap<Text, TextState>();
const attrState = new WeakMap<Element, Map<string, AttrState>>();
let language: Language = readLanguage();
let applying = false;
let observer: MutationObserver | null = null;

function readLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "ru" ? stored : "ru";
  } catch {
    return "ru";
  }
}

function dynamicRu(value: string): string | null {
  let m: RegExpMatchArray | null;

  if ((m = value.match(/^(\d+) channels$/))) return `${m[1]} каналов`;
  if ((m = value.match(/^(\d+) total$/))) return `${m[1]} всего`;
  if ((m = value.match(/^(\d+) primary dead$/))) return `${m[1]} нерабочих основных`;
  if ((m = value.match(/^(\d+) with dead streams$/))) return `${m[1]} с нерабочими потоками`;
  if ((m = value.match(/^(\d+) all dead$/))) return `${m[1]} полностью нерабочих`;
  if ((m = value.match(/^Score (.+)\/10$/))) return `Оценка ${m[1]}/10`;
  if ((m = value.match(/^(\d+) of (\d+) streams checked$/))) return `Проверено потоков: ${m[1]} из ${m[2]}`;
  if ((m = value.match(/^(\d+) selected$/))) return `Выбрано: ${m[1]}`;
  if ((m = value.match(/^(\d+) with catch-up$/))) return `С архивом: ${m[1]}`;
  if ((m = value.match(/^(\d+) low fps$/))) return `Низкий FPS: ${m[1]}`;
  if ((m = value.match(/^(\d+) mislabeled$/))) return `Неверная разметка: ${m[1]}`;
  if ((m = value.match(/^(\d+) duplicates$/))) return `Дубликаты: ${m[1]}`;
  if ((m = value.match(/^(\d+) catch-up$/))) return `Архив: ${m[1]}`;
  if ((m = value.match(/^(\d+) of (\d+) catch-up$/))) return `Архив: ${m[1]} из ${m[2]}`;

  if ((m = value.match(/^(\d+) real(?: · (\d+) shallower)? · (\d+) fake(?: · (\d+) untested)?$/))) {
    return [
      `${m[1]} рабочих`,
      m[2] ? `${m[2]} с меньшей глубиной` : null,
      `${m[3]} ложных`,
      m[4] ? `${m[4]} непроверенных` : null,
    ].filter(Boolean).join(" · ");
  }

  return null;
}

function translateCore(value: string): string {
  if (language !== "ru") return value;
  return RU[value] ?? dynamicRu(value) ?? value;
}

function translateTextValue(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return value;
  const translated = translateCore(trimmed);
  if (translated === trimmed) return value;
  const start = value.indexOf(trimmed);
  return value.slice(0, start) + translated + value.slice(start + trimmed.length);
}

function translateTextNode(node: Text) {
  const current = node.nodeValue ?? "";
  const state = textState.get(node);

  if (language === "en") {
    if (state && current === state.translated) node.nodeValue = state.original;
    return;
  }

  if (state && current === state.translated) return;

  const original = current;
  const translated = translateTextValue(original);
  textState.set(node, { original, translated });
  if (translated !== original) node.nodeValue = translated;
}

const TRANSLATABLE_ATTRS = ["title", "placeholder", "aria-label"];

function translateElementAttrs(element: Element) {
  let states = attrState.get(element);
  if (!states) {
    states = new Map<string, AttrState>();
    attrState.set(element, states);
  }

  for (const attr of TRANSLATABLE_ATTRS) {
    const current = element.getAttribute(attr);
    if (current == null) continue;
    const state = states.get(attr);

    if (language === "en") {
      if (state && current === state.translated) element.setAttribute(attr, state.original);
      continue;
    }

    if (state && current === state.translated) continue;

    const translated = translateTextValue(current);
    states.set(attr, { original: current, translated });
    if (translated !== current) element.setAttribute(attr, translated);
  }
}

function visit(node: Node) {
  if (node.nodeType === Node.TEXT_NODE) {
    translateTextNode(node as Text);
    return;
  }

  if (!(node instanceof Element)) return;
  if (node instanceof HTMLScriptElement || node instanceof HTMLStyleElement) return;

  translateElementAttrs(node);
  for (const child of Array.from(node.childNodes)) visit(child);
}

function applyToDocument() {
  if (applying) return;
  applying = true;
  try {
    document.documentElement.lang = language === "ru" ? "ru" : "en";
    visit(document.documentElement);
  } finally {
    applying = false;
  }
}

export function getLanguage(): Language {
  return language;
}

export function setLanguage(next: Language) {
  if (next === language) return;
  language = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage can be unavailable in restricted webviews.
  }
  applyToDocument();
  window.dispatchEvent(new CustomEvent("iptv-language-change", { detail: next }));
}

export function installLocalization() {
  language = readLanguage();
  applyToDocument();

  observer?.disconnect();
  observer = new MutationObserver((mutations) => {
    if (applying) return;
    applying = true;
    try {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text);
          continue;
        }
        if (mutation.type === "attributes" && mutation.target instanceof Element) {
          translateElementAttrs(mutation.target);
          continue;
        }
        for (const added of Array.from(mutation.addedNodes)) visit(added);
      }
    } finally {
      applying = false;
    }
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: TRANSLATABLE_ATTRS,
  });
}
