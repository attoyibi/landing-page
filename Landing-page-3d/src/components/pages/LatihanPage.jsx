import React from 'react';

import EmbedFrame from './EmbedFrame';
import { LATIHAN_URL } from '../../data/teaching';
import { useI18n } from '../../i18n';

const LatihanPage = () => {
    const { t } = useI18n();
    return <EmbedFrame title={t('meta.latihan')} url={LATIHAN_URL} />;
};

export default LatihanPage;
