import { describe, expect, it } from 'vitest'

import { FilterType } from '../api/types/Filter'
import { toggleOptionInDraft } from '../utils/toggle-option-in-draft'

describe('toggleOptionInDraft', () => {
	it('adds option to existing category', () => {
		const draft = [
			{ id: 'cat-1', type: FilterType.OPTION, optionsIds: ['opt-1'] }
		]
		const result = toggleOptionInDraft(draft, 'cat-1', 'opt-2')
		expect(result[0].optionsIds).toEqual(['opt-1', 'opt-2'])
	})

	it('removes option if already selected', () => {
		const draft = [
			{ id: 'cat-1', type: FilterType.OPTION, optionsIds: ['opt-1', 'opt-2'] }
		]
		const result = toggleOptionInDraft(draft, 'cat-1', 'opt-1')
		expect(result[0].optionsIds).toEqual(['opt-2'])
	})
})
