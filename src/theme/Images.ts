import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo.png'),
    spalsh: {
      bg: require('./assets/images/splash_bg.png'),
    },
    onboarding: {
      bg: require('./assets/images/onboarding/bg.png'),
      first: require('./assets/images/onboarding/1.png'),
      second: require('./assets/images/onboarding/2.png'),
      third: require('./assets/images/onboarding/3.png'),
    },
    main: {
      zerooneLogo: require('./assets/images/zeroone-logo.png'),
      zerooneCal: require('./assets/images/zeroone_cal.png'),
      summaryCardBackground: require('./assets/images/summary_card_background.png'),
      bigCoinWithShadow: require('./assets/images/big-coin.png'),
    },
    icons: {
      deposit: require('./assets/images/icons/deposit.png'),
      fiat: require('./assets/images/icons/fiat.png'),
      fiatAlt: require('./assets/images/icons/fiat-alt.png'),
      withdraw: require('./assets/images/icons/withdraw.png'),
      withdrawAlt: require('./assets/images/icons/withdraw-alt.png'),
      transfer: require('./assets/images/icons/transfer.png'),
      zerooneToken: require('./assets/images/icons/zeroone-token.png'),
      returns: require('./assets/images/icons/returns.png')
    },
    coins: {
      btc: require('./assets/images/icons/coins/btc.png'),
      cfxq: require('./assets/images/icons/coins/cfxq.png'),
      dash: require('./assets/images/icons/coins/dash.png'),
      dba: require('./assets/images/icons/coins/dba.png'),
      eth: require('./assets/images/icons/coins/eth.png'),
      usdt: require('./assets/images/icons/coins/usdt.png'),
      zone: require('./assets/images/icons/coins/zone.png'),
    },
    tab: {
      casa: require('./assets/images/tab/casa.png'),
      conto: require('./assets/images/tab/conto.png'),
      exchange: require('./assets/images/tab/exchange.png'),
      plus: require('./assets/images/tab/plus.png'),
    },
    settings: {
      conto: require('./assets/images/settings/conto.png'),
      cookie: require('./assets/images/settings/cookie.png'),
      financial: require('./assets/images/settings/financial.png'),
      help_support: require('./assets/images/settings/help_support.png'),
      impostazioin: require('./assets/images/settings/impostazioni.png'),
      privacy: require('./assets/images/settings/privacy.png'),
      risk: require('./assets/images/settings/risk.png'),
      sicurezza: require('./assets/images/settings/sicurezza.png'),
      wallet: require('./assets/images/settings/wallet.png'),
    },
    noRecord: require('./assets/images/no-record.png'),
  };
}
