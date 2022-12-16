//

import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/page-visibility-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

//

declare global {
	interface Window {
		ga: UniversalAnalytics.ga;
	}
}
export const ga = window.ga;

//

ga('require', 'eventTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'pageVisibilityTracker', {
	sendInitialPageview: true
});
ga('require', 'urlChangeTracker');
