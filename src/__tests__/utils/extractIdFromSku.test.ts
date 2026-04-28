import { describe, it, expect } from 'vitest'

import { extractIdFromSku } from '../../shared/utils/extractIdFromSku'

describe('extractIdFromSku', () => {
    it('should extract the id from the sku', () => {
        expect(extractIdFromSku('BEA-VEL-POW-001')).toBe(1)
    })

    it('should return null if the sku is invalid', () => {
        expect(extractIdFromSku('ASD-ASD-ASD-ASD')).toBeNull()
    })

    it('should return null if the sku is empty', () => {
        expect(extractIdFromSku('')).toBeNull()
    })
})