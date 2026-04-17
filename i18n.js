(function () {
  const LANG_KEY = 'arcade_lang';

  const T = {
    en: {
      // Common
      'back': '← Back',
      'exit': '← Exit',
      'play': 'PLAY',
      'loading_btn': '▶ LOADING...',
      'new_game': 'New Game',

      // Top nav desktop
      'nav.featured': 'Featured',

      // Sidebar nav
      'nav.home': 'Home',
      'nav.library': 'Library',
      'nav.shop': 'Shop',
      'nav.stats': 'Stats',
      'nav.leaderboard': 'Leaderboard',

      // Mobile nav
      'mobile.home': 'Home',
      'mobile.games': 'Games',
      'mobile.social': 'Social',
      'mobile.profile': 'Profile',

      // Sidebar player
      'player.level': 'LVL 99 ARCADE MASTER',
      'insert_coin': 'INSERT COIN',

      // Search
      'search.placeholder': 'SEARCH GAMES...',

      // Hero
      'hero.subtitle': 'Enter the digital realm. High scores, neon lights, and infinite play await. Ready player one?',
      'hero.start': 'START ENGINE',
      'hero.ranks': 'VIEW RANKS',

      // Section headings
      'section.featured': 'Featured',

      // Game descriptions
      'game.pixel-pilot.desc': 'Retro galactic dogfights across eight dangerous pixelated sectors.',
      'game.dino-math.desc': 'Solve math gates across 5 sectors. Jump holes. Teach your dino arithmetic!',
      'game.simon.desc': 'Watch the colour sequence and repeat it. How far can you go?',
      'game.whack-a-mole.desc': 'Tap every mole before it disappears! 60 seconds on the clock.',
      'game.memory-match.desc': 'Flip the cards and find all 8 matching pairs with as few errors as possible.',
      'game.pixel-art.desc': 'Draw anything you imagine! 16 colors, draw and fill tools. Your canvas awaits.',
      'game.color-flood.desc': 'Flood the entire board with one color before you run out of moves!',
      'game.geo-dash.desc': 'Jump over spikes and blocks in this rhythm platformer. How far can you go?',

      // Neon Surge game
      'gd.title':          'Neon Surge',
      'gd.score':          'Score',
      'gd.best':           'Best',
      'gd.attempts':       'Attempts',
      'gd.normal':         'Normal',
      'gd.hard':           'Hard',
      'gd.insane':         'Insane',
      'gd.game_over':      'Game Over',
      'gd.save':           'Save Score',
      'gd.skip':           'Skip & Retry',
      'gd.menu':           '← Menu',
      'gd.name_placeholder': 'Enter name...',
      'gd.saving':         'Saving···',
      'gd.saved':          'Saved! ✓',
      'gd.new_best':       'New best score!',
      'gd.nice_try':       'Nice try!',
      'gd.press_to_start': 'SPACE · CLICK · TAP  TO START',

      // Leaderboard page
      'lb.title': 'Leaderboard',
      'lb.col.rank': '#',
      'lb.col.player': 'Player',
      'lb.col.score': 'Score',
      'lb.col.date': 'Date',
      'lb.empty': 'No scores yet',
      'lb.empty_sub': 'Play the game to set a record',
      'lb.loading': 'Loading',

      // Stats page
      'stats.title': 'Stats',
      'stats.overview': 'Overview',
      'stats.by_game': 'By Game',
      'stats.hof': 'Hall of Fame',
      'stats.total_plays': 'Total Plays',
      'stats.best_score': 'Best Score',
      'stats.top_player': 'Top Player',
      'stats.hottest': 'Hottest Game',
      'stats.col.game': 'Game',
      'stats.col.plays': 'Plays',
      'stats.col.avg': 'Avg Score',
      'stats.col.best': 'Best Score',
      'stats.col.champion': 'Champion',
      'stats.loading': 'LOADING···',
      'stats.no_data': 'NO DATA YET',
      'stats.no_players': 'NO PLAYERS YET',
      'stats.combined': 'combined best',
      'stats.session': 'session logged',
      'stats.sessions': 'sessions logged',
      'stats.play': 'play',
      'stats.plays': 'plays',
      'stats.game': 'game',
      'stats.games': 'games',

      // Library page
      'lib.title': 'Library',
      'lib.search': 'Search games...',
      'lib.cat.all': 'All',
      'lib.cat.action': 'Action',
      'lib.cat.education': 'Education',
      'lib.cat.memory': 'Memory',
      'lib.cat.puzzle': 'Puzzle',
      'lib.cat.creative': 'Creative',
      'lib.sort.az': 'A → Z',
      'lib.sort.za': 'Z → A',
      'lib.sort.top': 'Top Score',
      'lib.sort.plays': 'Most Played',
      'lib.record': 'RECORD',
      'lib.no_plays': 'no plays',
      'lib.play': 'play',
      'lib.plays': 'plays',
      'lib.game_count': 'game',
      'lib.games_count': 'games',
      'lib.empty': 'No games match your search',

      // Color Flood game
      'flood.title': 'Color Flood',
      'flood.moves_left': 'Moves Left',
      'flood.used': 'Used',
      'flood.easy': 'Easy',
      'flood.medium': 'Med',
      'flood.hard': 'Hard',
      'flood.new_game': 'New Game',
      'flood.win_title': 'You Win!',
      'flood.lose_title': 'Out of Moves',
      'flood.save': 'Save Score',
      'flood.play_again': 'Play Again',
      'flood.retry': 'Try Again',
      'flood.menu': '← Menu',
      'flood.name_placeholder': 'Enter name...',
      'flood.saving': 'Saving···',
      'flood.saved': 'Saved! ✓',
      'flood.move': 'move',
      'flood.moves': 'moves',
      'flood.spare': 'to spare',
      'flood.cell': 'cell',
      'flood.cells': 'cells',
      'flood.left_unflooded': 'left unflooded. So close!',
    },

    es: {
      // Common
      'back': '← Volver',
      'exit': '← Salir',
      'play': 'JUGAR',
      'loading_btn': '▶ CARGANDO...',
      'new_game': 'Nuevo Juego',

      // Top nav desktop
      'nav.featured': 'Destacados',

      // Sidebar nav
      'nav.home': 'Inicio',
      'nav.library': 'Biblioteca',
      'nav.shop': 'Tienda',
      'nav.stats': 'Estadísticas',
      'nav.leaderboard': 'Clasificación',

      // Mobile nav
      'mobile.home': 'Inicio',
      'mobile.games': 'Juegos',
      'mobile.social': 'Social',
      'mobile.profile': 'Perfil',

      // Sidebar player
      'player.level': 'NVL 99 MAESTRO ARCADE',
      'insert_coin': 'INSERTAR MONEDA',

      // Search
      'search.placeholder': 'BUSCAR JUEGOS...',

      // Hero
      'hero.subtitle': 'Entra al reino digital. Puntajes altos, luces de neón y juego infinito te esperan. ¿Listo, jugador uno?',
      'hero.start': 'INICIAR',
      'hero.ranks': 'VER RANKING',

      // Section headings
      'section.featured': 'Destacados',

      // Game descriptions
      'game.pixel-pilot.desc': 'Combates galácticos retro en ocho peligrosos sectores pixelados.',
      'game.dino-math.desc': '¡Resolvé puertas matemáticas en 5 sectores. Saltá hoyos. Enseñale aritmética a tu dino!',
      'game.simon.desc': 'Mirá la secuencia de colores y repetila. ¿Hasta dónde podés llegar?',
      'game.whack-a-mole.desc': '¡Golpeá cada topo antes de que desaparezca! 60 segundos en el reloj.',
      'game.memory-match.desc': 'Girá las cartas y encontrá los 8 pares con los menos errores posibles.',
      'game.pixel-art.desc': '¡Dibujá lo que imagines! 16 colores, herramientas de dibujo y relleno. Tu lienzo espera.',
      'game.color-flood.desc': '¡Inundá todo el tablero con un solo color antes de quedarte sin movimientos!',
      'game.geo-dash.desc': '¡Saltá obstáculos y bloques en este plataformero rítmico. ¿Qué tan lejos llegarás?',

      // Neon Surge game
      'gd.title':          'Neon Surge',
      'gd.score':          'Puntaje',
      'gd.best':           'Mejor',
      'gd.attempts':       'Intentos',
      'gd.normal':         'Normal',
      'gd.hard':           'Difícil',
      'gd.insane':         'Insano',
      'gd.game_over':      'Game Over',
      'gd.save':           'Guardar Puntaje',
      'gd.skip':           'Saltear y Reintentar',
      'gd.menu':           '← Menú',
      'gd.name_placeholder': 'Ingresá tu nombre...',
      'gd.saving':         'Guardando···',
      'gd.saved':          '¡Guardado! ✓',
      'gd.new_best':       '¡Nuevo récord!',
      'gd.nice_try':       '¡Buen intento!',
      'gd.press_to_start': 'ESPACIO · CLICK · TAP  PARA EMPEZAR',

      // Leaderboard page
      'lb.title': 'Clasificación',
      'lb.col.rank': '#',
      'lb.col.player': 'Jugador',
      'lb.col.score': 'Puntaje',
      'lb.col.date': 'Fecha',
      'lb.empty': 'Sin puntajes aún',
      'lb.empty_sub': 'Jugá para establecer un récord',
      'lb.loading': 'Cargando',

      // Stats page
      'stats.title': 'Estadísticas',
      'stats.overview': 'Resumen',
      'stats.by_game': 'Por Juego',
      'stats.hof': 'Salón de la Fama',
      'stats.total_plays': 'Total Partidas',
      'stats.best_score': 'Mejor Puntaje',
      'stats.top_player': 'Top Jugador',
      'stats.hottest': 'Juego Popular',
      'stats.col.game': 'Juego',
      'stats.col.plays': 'Partidas',
      'stats.col.avg': 'Prom. Puntaje',
      'stats.col.best': 'Mejor Puntaje',
      'stats.col.champion': 'Campeón',
      'stats.loading': 'CARGANDO···',
      'stats.no_data': 'SIN DATOS AÚN',
      'stats.no_players': 'SIN JUGADORES AÚN',
      'stats.combined': 'mejor combinado',
      'stats.session': 'partida registrada',
      'stats.sessions': 'partidas registradas',
      'stats.play': 'partida',
      'stats.plays': 'partidas',
      'stats.game': 'juego',
      'stats.games': 'juegos',

      // Library page
      'lib.title': 'Biblioteca',
      'lib.search': 'Buscar juegos...',
      'lib.cat.all': 'Todos',
      'lib.cat.action': 'Acción',
      'lib.cat.education': 'Educación',
      'lib.cat.memory': 'Memoria',
      'lib.cat.puzzle': 'Puzzle',
      'lib.cat.creative': 'Creativo',
      'lib.sort.az': 'A → Z',
      'lib.sort.za': 'Z → A',
      'lib.sort.top': 'Mejor Puntaje',
      'lib.sort.plays': 'Más Jugado',
      'lib.record': 'RÉCORD',
      'lib.no_plays': 'sin partidas',
      'lib.play': 'partida',
      'lib.plays': 'partidas',
      'lib.game_count': 'juego',
      'lib.games_count': 'juegos',
      'lib.empty': 'Ningún juego coincide con tu búsqueda',

      // Color Flood game
      'flood.title': 'Color Flood',
      'flood.moves_left': 'Movimientos',
      'flood.used': 'Usados',
      'flood.easy': 'Fácil',
      'flood.medium': 'Med',
      'flood.hard': 'Difícil',
      'flood.new_game': 'Nuevo Juego',
      'flood.win_title': '¡Ganaste!',
      'flood.lose_title': 'Sin Movimientos',
      'flood.save': 'Guardar Puntaje',
      'flood.play_again': 'Jugar de Nuevo',
      'flood.retry': 'Intentar de Nuevo',
      'flood.menu': '← Menú',
      'flood.name_placeholder': 'Ingresá tu nombre...',
      'flood.saving': 'Guardando···',
      'flood.saved': '¡Guardado! ✓',
      'flood.move': 'movimiento',
      'flood.moves': 'movimientos',
      'flood.spare': 'de sobra',
      'flood.cell': 'celda',
      'flood.cells': 'celdas',
      'flood.left_unflooded': 'sin inundar. ¡Tan cerca!',
    },
  };

  // ── Public API ──────────────────────────────────────
  window.getLang = () => localStorage.getItem(LANG_KEY) || 'en';
  window.setLang = lang => localStorage.setItem(LANG_KEY, lang);

  window.t = key => {
    const lang = getLang();
    return T[lang]?.[key] ?? T.en?.[key] ?? null;
  };

  window.applyTranslations = () => {
    const lang = getLang();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = T[lang]?.[el.dataset.i18n] ?? T.en?.[el.dataset.i18n];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = T[lang]?.[el.dataset.i18nPlaceholder] ?? T.en?.[el.dataset.i18nPlaceholder];
      if (v != null) el.placeholder = v;
    });
    // Sync toggle button state
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      const flagEl = btn.querySelector('.lang-flag');
      const codeEl = btn.querySelector('.lang-code');
      if (flagEl) flagEl.textContent = lang === 'es' ? '🇪🇸' : '🇺🇸';
      if (codeEl) codeEl.textContent = lang === 'es' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
  };

  window.toggleLang = () => {
    setLang(getLang() === 'en' ? 'es' : 'en');
    applyTranslations();
    window.dispatchEvent(new CustomEvent('langchange'));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
