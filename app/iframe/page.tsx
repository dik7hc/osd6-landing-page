'use client';

import { useState } from 'react';
import { ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';

export default function IframeTestPage() {
    const targetUrl = 'http://localhost:3000';

    return (
        <iframe
            src={targetUrl}
            className="w-full h-[600px] border-0"
            title="Digilink BP Dev"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
    );
}
