function readEnv(value: string | undefined): string | undefined {
  return value && value.trim().length > 0 ? value : undefined;
}

function readBooleanEnv(value: string | undefined, fallback = false): boolean {
  const clean = readEnv(value)?.toLowerCase();
  if (!clean) return fallback;
  return ["1", "true", "yes", "on"].includes(clean);
}

function readNumberEnv(value: string | undefined, fallback: number): number {
  const clean = readEnv(value);
  if (!clean) return fallback;
  const parsed = Number(clean);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export const runtimeConfig = {
  adsterraBannerId: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID),
  adsterraBanner300x250Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_KEY) ||
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_ID),
  adsterraBanner300x250ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_SCRIPT_URL),
  adsterraBanner320x50Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_KEY),
  adsterraBanner320x50ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_SCRIPT_URL),
  adsterraBanner728x90Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_KEY) ||
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_LEADERBOARD_ID),
  adsterraBanner728x90ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_SCRIPT_URL),
  adsterraBanner468x60Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_KEY),
  adsterraBanner468x60ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_SCRIPT_URL),
  adsterraBanner160x300Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_KEY),
  adsterraBanner160x300ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_SCRIPT_URL),
  adsterraBanner160x600Key: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_KEY),
  adsterraBanner160x600ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_SCRIPT_URL),
  adsterraNative1Id: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_ID),
  adsterraNative1ScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_SCRIPT_URL),
  adsterraLeaderboardId: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_LEADERBOARD_ID),
  adsterraSmartLinkUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL),
  adsterraPopunderScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SCRIPT_URL),
  adsterraEnablePopunder: readBooleanEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_POPUNDER, false),
  adsterraPopunderDelayMs: readNumberEnv(process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_DELAY_MS, 30000),
  adsterraPopunderMinPageViews: readNumberEnv(process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_MIN_PAGEVIEWS, 2),
  adsterraSocialBarScriptUrl: readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SCRIPT_URL),
  adsterraEnableSocialBar: readBooleanEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_SOCIAL_BAR, false),
  adsterraEnableStickyRail: readBooleanEnv(process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_STICKY_RAIL, false),
  analyticsId: readEnv(process.env.NEXT_PUBLIC_ANALYTICS_ID)
};
