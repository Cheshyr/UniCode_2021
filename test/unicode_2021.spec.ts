import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { solidity } from 'ethereum-waffle'
import { ethers } from 'hardhat'
import { Contract } from 'ethers'

chai.use(chaiAsPromised)
chai.use(solidity)


const printHelloUnicode = async (contract: Contract): Promise<boolean> => {
    return contract.hello_world()
}

describe('unicode-2021', () => {
    let contract: Contract
    before(async () => {
        const factory = await ethers.getContractFactory('unicode_2021')
        contract = await factory.deploy()
    })

    describe('hello_world', () => {
        it('should print and return true', async() => {
            expect(
                await printHelloUnicode(contract)
            ).to.be.true
        })
    })
})