import React, { useState, useEffect, useMemo } from 'react';

const PrefixSearchComponent = () => {
	const [searchQuery, setSearchQuery] = useState('');

	// Key definitions with Greek letters added
	const keys = useMemo(() => [
		{ key: '01000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(1) - Authorizer Pool', symbol: 'α', greekName: 'alpha' },
		{ key: '02000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(2) - Authorizer Queue', symbol: 'φ', greekName: 'phi' },
		{ key: '03000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(3) - Recent Blocks', symbol: 'β', greekName: 'beta' },
		{ key: '04000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(4) - Safrole', symbol: 'γ', greekName: 'gamma' },
		{ key: '05000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(5) - Disputes', symbol: 'ψ', greekName: 'psi' },
		{ key: '06000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(6) - Entropy Pool', symbol: 'η', greekName: 'eta' },
		{ key: '07000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(7) - Validator Queue', symbol: 'ι', greekName: 'iota' },
		{ key: '08000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(8) - Current Validators', symbol: 'κ', greekName: 'kappa' },
		{ key: '09000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(9) - Previous Validators', symbol: 'λ', greekName: 'lambda' },
		{ key: '0a000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(10) - Assigned Reports', symbol: 'ρ', greekName: 'rho' },
		{ key: '0b000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(11) - Time', symbol: 'τ', greekName: 'tau' },
		{ key: '0c000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(12) - Priviledged Services', symbol: 'χ', greekName: 'chi' },
		{ key: '0d000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(13) - Validator Statistics', symbol: 'π', greekName: 'pi' },
		{ key: '0e000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(14) - Accumulation Queue', symbol: 'θ', greekName: 'theta' },
		{ key: '0f000000000000000000000000000000000000000000000000000000000000', type: 'static', name: 'C(15) - Accumulation History', symbol: 'ξ', greekName: 'xi' },

		// TODO add metadata keys of well-known services
		// TODO check upper case search terms

		// Regex patterns
		{ key: 'ff??00??00??00??0000000000000000000000000000000000000000000000', type: 'regex', regex: /^ff[0-9a-f]{2}00[0-9a-f]{2}00[0-9a-f]{2}00[0-9a-f]{2}0{46}/, name: 'C(255, s) - Service Metadata', symbol: 'δ', greekName: 'delta', link: 'https://graypaper.fluffylabs.dev/#/7e6ff6a/3bc0023bd402?v=0.6.7' },

		{ key: '??????????????????????????????????????????????????????????????', type: 'regex', regex: /^[0-9a-f]{62}/, name: 'C(s, *) - Opaque Service Storage', symbol: 'δ', greekName: 'delta' },
	], []);

	// Search logic
	const couldMatchRegex = (query, regex) => {
		const normalizedQuery = query.toLowerCase();

		if (regex.test(normalizedQuery)) {
			return true;
		}

		const regexStr = regex.source;

		try {
			const testStrings = [
				normalizedQuery,
				normalizedQuery + '0',
				normalizedQuery + '00000000',
				normalizedQuery + '0'.repeat(Math.max(0, 62 - normalizedQuery.length))
			];

			for (const testStr of testStrings) {
				if (regex.test(testStr)) {
					return true;
				}
			}

			if (regexStr.includes('*') || regexStr.includes('[0-9a-f]')) {
				const prefixMatch = regexStr.match(/^\^?([0-9a-f\[\]\\-]+)/);
				if (prefixMatch) {
					let prefix = prefixMatch[1]
						.replace(/\[0-9a-f\]/g, '[0-9a-f]')
						.replace(/\[\^.*?\]/g, '')
						.replace(/[\\^$]/g, '');

					if (prefix.includes('[')) {
						const beforeBracket = prefix.split('[')[0];
						return normalizedQuery.startsWith(beforeBracket);
					} else {
						return normalizedQuery.startsWith(prefix) || prefix.startsWith(normalizedQuery);
					}
				}
			}

			return false;
		} catch (e) {
			console.warn('Regex matching error:', e);
			return false;
		}
	};

	const calculateRegexMatchLength = (query, keyPattern) => {
		let matchLen = 0;
		for (let i = 0; i < Math.min(query.length, keyPattern.length); i++) {
			if (keyPattern[i] === '*' || keyPattern[i] === query[i]) {
				matchLen++;
			} else {
				break;
			}
		}
		return matchLen;
	};

	const findMatches = (query) => {
		if (!query.trim()) return [];

		const matches = [];
		const normalizedQuery = query.toLowerCase();
		let has_perfect_static_match = false;

		for (const keyItem of keys) {
			let matchLength = 0;
			let isMatch = false;

			if (keyItem.type === 'static') {
				const normalizedKey = keyItem.key.toLowerCase();
				if (normalizedQuery.startsWith(normalizedKey) || normalizedKey.startsWith(normalizedQuery)) {
					isMatch = true;
					matchLength = normalizedQuery.length;

					if (normalizedKey === normalizedQuery) {
						has_perfect_static_match = true;
					}
				}
			} else if (keyItem.type === 'regex' && !has_perfect_static_match) {
				if (couldMatchRegex(normalizedQuery, keyItem.regex)) {
					isMatch = true;
					matchLength = calculateRegexMatchLength(normalizedQuery, keyItem.key);
				}
			}

			// Also search by Greek letter name or symbol
			if (!isMatch && keyItem.greekName) {
				if (keyItem.greekName.toLowerCase().includes(normalizedQuery) ||
					(keyItem.symbol && keyItem.symbol.toLowerCase() === normalizedQuery)) {
					isMatch = true;
					matchLength = normalizedQuery.length * 0.8; // Slightly lower priority for Greek matches
				}
			}

			// Search in the description/name
			if (!isMatch && keyItem.name.toLowerCase().includes(normalizedQuery)) {
				isMatch = true;
				matchLength = normalizedQuery.length * 0.6; // Lower priority for name matches
			}

			if (isMatch) {
				matches.push({
					...keyItem,
					matchLength: matchLength
				});
			}
		}

		return matches.sort((a, b) => {
			if (b.matchLength !== a.matchLength) {
				return b.matchLength - a.matchLength;
			}
			return a.key.localeCompare(b.key);
		});
	};

	const highlightMatch = (text, query) => {
		if (!query) return text;

		const index = text.toLowerCase().indexOf(query.toLowerCase());
		if (index >= 0) {
			return (
				<>
					{text.substring(0, index)}
					<strong>{text.substring(index, index + query.length)}</strong>
					{text.substring(index + query.length)}
				</>
			);
		}
		return text;
	};

	const matches = findMatches(searchQuery);

	const styles = {
		container: {
			fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
			maxWidth: '800px',
			margin: '0 auto',
			padding: '0',
		},
		innerContainer: {
			background: 'transparent',
			borderRadius: '0',
			padding: '0',
			boxShadow: 'none',
		},
		title: {
			color: '#333',
			textAlign: 'center',
			marginBottom: '30px',
			fontWeight: '600',
		},
		searchContainer: {
			marginBottom: '30px',
		},
		searchInput: {
			width: '100%',
			padding: '15px',
			fontSize: '16px',
			border: '2px solid #e0e0e0',
			borderRadius: '10px',
			outline: 'none',
			transition: 'border-color 0.3s ease',
			boxSizing: 'border-box',
		},
		searchInputFocus: {
			borderColor: '#667eea',
			boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
		},
		resultsContainer: {
			marginBottom: '30px',
		},
		resultsTitle: {
			fontWeight: '600',
			color: '#333',
			marginBottom: '15px',
			fontSize: '18px',
		},
		resultsList: {
			background: '#f8f9fa',
			borderRadius: '10px',
			maxHeight: '300px',
			overflowY: 'auto',
		},
		resultItem: {
			padding: '12px 15px',
			borderBottom: '1px solid #e9ecef',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			transition: 'background-color 0.2s ease',
		},
		resultItemHover: {
			backgroundColor: '#e9ecef',
		},
		resultKey: {
			fontFamily: "'Courier New', monospace",
			fontWeight: '600',
			color: '#495057',
			wordBreak: 'break-all',
			fontSize: '12px',
		},
		resultName: {
			fontSize: '10px',
			color: '#6c757d',
			marginTop: '2px',
			lineHeight: '1.2',
		},
		greekSymbol: {
			fontSize: '18px',
			fontWeight: 'bold',
			color: '#495057',
			marginRight: '8px',
			minWidth: '24px',
			textAlign: 'center',
		},
		resultType: {
			fontSize: '12px',
			padding: '4px 8px',
			borderRadius: '20px',
			fontWeight: '500',
			textTransform: 'uppercase',
		},
		typeStatic: {
			backgroundColor: '#d1ecf1',
			color: '#0c5460',
		},
		typeRegex: {
			backgroundColor: '#f8d7da',
			color: '#721c24',
		},
		keysContainer: {
			marginTop: '30px',
		},
		keysTitle: {
			fontWeight: '600',
			color: '#333',
			marginBottom: '15px',
			fontSize: '18px',
		},
		keysGrid: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},
		keyItem: {
			background: '#f8f9fa',
			padding: '10px',
			borderRadius: '8px',
			borderLeft: '4px solid transparent',
			transition: 'transform 0.2s ease, box-shadow 0.2s ease',
			width: '100%',
		},
		keyItemStatic: {
			borderLeftColor: '#17a2b8',
		},
		keyItemRegex: {
			borderLeftColor: '#dc3545',
		},
		keyHeader: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '4px',
		},
		keyText: {
			fontFamily: "'Courier New', monospace",
			fontWeight: 'bold',
			color: '#495057',
			wordBreak: 'break-all',
			fontSize: '12px',
			flex: 1,
		},
		keyName: {
			fontSize: '12px',
			color: '#6c757d',
			marginTop: '4px',
			lineHeight: '1.3',
		},
		keyType: {
			fontSize: '13px',
			color: '#6c757d',
			textTransform: 'uppercase',
			fontWeight: '500',
		},
		noResults: {
			textAlign: 'center',
			color: '#6c757d',
			padding: '20px',
			fontStyle: 'italic',
		},
		searchHint: {
			fontSize: '12px',
			color: '#6c757d',
			marginTop: '5px',
			fontStyle: 'italic',
		}
	};

	return (
		<div style={styles.container}>
			<div style={styles.innerContainer}>
				<div style={styles.searchContainer}>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search by hex prefix, Greek letter, or name (e.g. 01, alpha, validator)..."
						autoComplete="off"
						style={styles.searchInput}
					/>
				</div>

				<div style={styles.resultsContainer}>
					<div style={styles.resultsTitle}>Results</div>
					<div style={styles.resultsList}>
						{!searchQuery.trim() ? (
							<div style={styles.noResults}>Enter text above to see matching keys</div>
						) : matches.length === 0 ? (
							<div style={styles.noResults}>No matching keys found</div>
						) : (
							matches.map((match, index) => (
								<div key={index} style={styles.resultItem}>
									<div style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
										{match.symbol && (
											<div style={styles.greekSymbol}>{match.symbol}</div>
										)}
										<div style={{ flex: 1 }}>
											<span style={styles.resultKey}>
												{highlightMatch(match.key, searchQuery)}
											</span>
											<div style={styles.resultName}>
												{highlightMatch(match.name, searchQuery)}
												{match.greekName && (
													<span> ({highlightMatch(match.greekName, searchQuery)})</span>
												)}
											</div>
										</div>
									</div>
									<span style={{
										...styles.resultType,
										...(match.type === 'static' ? styles.typeStatic : styles.typeRegex)
									}}>
										{match.type}
									</span>
								</div>
							))
						)}
					</div>
				</div>

				<div style={styles.keysContainer}>
					<div style={styles.keysTitle}>Known Keys</div>
					<div style={styles.keysGrid}>
						{keys.map((keyItem, index) => (
							<div
								key={index}
								style={{
									...styles.keyItem,
									...(keyItem.type === 'static' ? styles.keyItemStatic : styles.keyItemRegex)
								}}
							>
								<div style={styles.keyHeader}>
									{keyItem.symbol && (
										<div style={styles.greekSymbol}>{keyItem.symbol}</div>
									)}
									<div style={styles.keyText}>{keyItem.key}</div>
								</div>
								<div style={styles.keyName}>
									{keyItem.name}
									{keyItem.greekName && (
										<span> ({keyItem.greekName})</span>
									)}
								</div>
								<div style={styles.keyType}>{keyItem.type}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrefixSearchComponent;
