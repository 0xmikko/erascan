// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package faucets

import (
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = abi.U256
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// FaucetsABI is the input ABI used to generate the binding from.
const FaucetsABI = "[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"INITIAL_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"mintMockTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_oldValue\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newValue\",\"type\":\"uint256\"}],\"name\":\"changeApproval\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"numeraiTransfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"ok\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"

// FaucetsBin is the compiled bytecode used for deploying new contracts.
var FaucetsBin = "0xundefined"

// DeployFaucets deploys a new Ethereum contract, binding an instance of Faucets to it.
func DeployFaucets(auth *bind.TransactOpts, backend bind.ContractBackend) (common.Address, *types.Transaction, *Faucets, error) {
	parsed, err := abi.JSON(strings.NewReader(FaucetsABI))
	if err != nil {
		return common.Address{}, nil, nil, err
	}

	address, tx, contract, err := bind.DeployContract(auth, parsed, common.FromHex(FaucetsBin), backend)
	if err != nil {
		return common.Address{}, nil, nil, err
	}
	return address, tx, &Faucets{FaucetsCaller: FaucetsCaller{contract: contract}, FaucetsTransactor: FaucetsTransactor{contract: contract}, FaucetsFilterer: FaucetsFilterer{contract: contract}}, nil
}

// Faucets is an auto generated Go binding around an Ethereum contract.
type Faucets struct {
	FaucetsCaller     // Read-only binding to the contract
	FaucetsTransactor // Write-only binding to the contract
	FaucetsFilterer   // Log filterer for contract events
}

// FaucetsCaller is an auto generated read-only Go binding around an Ethereum contract.
type FaucetsCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FaucetsTransactor is an auto generated write-only Go binding around an Ethereum contract.
type FaucetsTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FaucetsFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type FaucetsFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FaucetsSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type FaucetsSession struct {
	Contract     *Faucets          // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// FaucetsCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type FaucetsCallerSession struct {
	Contract *FaucetsCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts  // Call options to use throughout this session
}

// FaucetsTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type FaucetsTransactorSession struct {
	Contract     *FaucetsTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts  // Transaction auth options to use throughout this session
}

// FaucetsRaw is an auto generated low-level Go binding around an Ethereum contract.
type FaucetsRaw struct {
	Contract *Faucets // Generic contract binding to access the raw methods on
}

// FaucetsCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type FaucetsCallerRaw struct {
	Contract *FaucetsCaller // Generic read-only contract binding to access the raw methods on
}

// FaucetsTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type FaucetsTransactorRaw struct {
	Contract *FaucetsTransactor // Generic write-only contract binding to access the raw methods on
}

// NewFaucets creates a new instance of Faucets, bound to a specific deployed contract.
func NewFaucets(address common.Address, backend bind.ContractBackend) (*Faucets, error) {
	contract, err := bindFaucets(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &Faucets{FaucetsCaller: FaucetsCaller{contract: contract}, FaucetsTransactor: FaucetsTransactor{contract: contract}, FaucetsFilterer: FaucetsFilterer{contract: contract}}, nil
}

// NewFaucetsCaller creates a new read-only instance of Faucets, bound to a specific deployed contract.
func NewFaucetsCaller(address common.Address, caller bind.ContractCaller) (*FaucetsCaller, error) {
	contract, err := bindFaucets(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &FaucetsCaller{contract: contract}, nil
}

// NewFaucetsTransactor creates a new write-only instance of Faucets, bound to a specific deployed contract.
func NewFaucetsTransactor(address common.Address, transactor bind.ContractTransactor) (*FaucetsTransactor, error) {
	contract, err := bindFaucets(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &FaucetsTransactor{contract: contract}, nil
}

// NewFaucetsFilterer creates a new log filterer instance of Faucets, bound to a specific deployed contract.
func NewFaucetsFilterer(address common.Address, filterer bind.ContractFilterer) (*FaucetsFilterer, error) {
	contract, err := bindFaucets(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &FaucetsFilterer{contract: contract}, nil
}

// bindFaucets binds a generic wrapper to an already deployed contract.
func bindFaucets(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(FaucetsABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Faucets *FaucetsRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Faucets.Contract.FaucetsCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Faucets *FaucetsRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Faucets.Contract.FaucetsTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Faucets *FaucetsRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Faucets.Contract.FaucetsTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_Faucets *FaucetsCallerRaw) Call(opts *bind.CallOpts, result interface{}, method string, params ...interface{}) error {
	return _Faucets.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_Faucets *FaucetsTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _Faucets.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_Faucets *FaucetsTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _Faucets.Contract.contract.Transact(opts, method, params...)
}

// INITIALSUPPLY is a free data retrieval call binding the contract method 0x2ff2e9dc.
//
// Solidity: function INITIAL_SUPPLY() constant returns(uint256)
func (_Faucets *FaucetsCaller) INITIALSUPPLY(opts *bind.CallOpts) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "INITIAL_SUPPLY")
	return *ret0, err
}

// INITIALSUPPLY is a free data retrieval call binding the contract method 0x2ff2e9dc.
//
// Solidity: function INITIAL_SUPPLY() constant returns(uint256)
func (_Faucets *FaucetsSession) INITIALSUPPLY() (*big.Int, error) {
	return _Faucets.Contract.INITIALSUPPLY(&_Faucets.CallOpts)
}

// INITIALSUPPLY is a free data retrieval call binding the contract method 0x2ff2e9dc.
//
// Solidity: function INITIAL_SUPPLY() constant returns(uint256)
func (_Faucets *FaucetsCallerSession) INITIALSUPPLY() (*big.Int, error) {
	return _Faucets.Contract.INITIALSUPPLY(&_Faucets.CallOpts)
}

// Allowance is a free data retrieval call binding the contract method 0xdd62ed3e.
//
// Solidity: function allowance(address owner, address spender) constant returns(uint256)
func (_Faucets *FaucetsCaller) Allowance(opts *bind.CallOpts, owner common.Address, spender common.Address) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "allowance", owner, spender)
	return *ret0, err
}

// Allowance is a free data retrieval call binding the contract method 0xdd62ed3e.
//
// Solidity: function allowance(address owner, address spender) constant returns(uint256)
func (_Faucets *FaucetsSession) Allowance(owner common.Address, spender common.Address) (*big.Int, error) {
	return _Faucets.Contract.Allowance(&_Faucets.CallOpts, owner, spender)
}

// Allowance is a free data retrieval call binding the contract method 0xdd62ed3e.
//
// Solidity: function allowance(address owner, address spender) constant returns(uint256)
func (_Faucets *FaucetsCallerSession) Allowance(owner common.Address, spender common.Address) (*big.Int, error) {
	return _Faucets.Contract.Allowance(&_Faucets.CallOpts, owner, spender)
}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) constant returns(uint256)
func (_Faucets *FaucetsCaller) BalanceOf(opts *bind.CallOpts, owner common.Address) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "balanceOf", owner)
	return *ret0, err
}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) constant returns(uint256)
func (_Faucets *FaucetsSession) BalanceOf(owner common.Address) (*big.Int, error) {
	return _Faucets.Contract.BalanceOf(&_Faucets.CallOpts, owner)
}

// BalanceOf is a free data retrieval call binding the contract method 0x70a08231.
//
// Solidity: function balanceOf(address owner) constant returns(uint256)
func (_Faucets *FaucetsCallerSession) BalanceOf(owner common.Address) (*big.Int, error) {
	return _Faucets.Contract.BalanceOf(&_Faucets.CallOpts, owner)
}

// Decimals is a free data retrieval call binding the contract method 0x313ce567.
//
// Solidity: function decimals() constant returns(uint256)
func (_Faucets *FaucetsCaller) Decimals(opts *bind.CallOpts) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "decimals")
	return *ret0, err
}

// Decimals is a free data retrieval call binding the contract method 0x313ce567.
//
// Solidity: function decimals() constant returns(uint256)
func (_Faucets *FaucetsSession) Decimals() (*big.Int, error) {
	return _Faucets.Contract.Decimals(&_Faucets.CallOpts)
}

// Decimals is a free data retrieval call binding the contract method 0x313ce567.
//
// Solidity: function decimals() constant returns(uint256)
func (_Faucets *FaucetsCallerSession) Decimals() (*big.Int, error) {
	return _Faucets.Contract.Decimals(&_Faucets.CallOpts)
}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() constant returns(string)
func (_Faucets *FaucetsCaller) Name(opts *bind.CallOpts) (string, error) {
	var (
		ret0 = new(string)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "name")
	return *ret0, err
}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() constant returns(string)
func (_Faucets *FaucetsSession) Name() (string, error) {
	return _Faucets.Contract.Name(&_Faucets.CallOpts)
}

// Name is a free data retrieval call binding the contract method 0x06fdde03.
//
// Solidity: function name() constant returns(string)
func (_Faucets *FaucetsCallerSession) Name() (string, error) {
	return _Faucets.Contract.Name(&_Faucets.CallOpts)
}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() constant returns(string)
func (_Faucets *FaucetsCaller) Symbol(opts *bind.CallOpts) (string, error) {
	var (
		ret0 = new(string)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "symbol")
	return *ret0, err
}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() constant returns(string)
func (_Faucets *FaucetsSession) Symbol() (string, error) {
	return _Faucets.Contract.Symbol(&_Faucets.CallOpts)
}

// Symbol is a free data retrieval call binding the contract method 0x95d89b41.
//
// Solidity: function symbol() constant returns(string)
func (_Faucets *FaucetsCallerSession) Symbol() (string, error) {
	return _Faucets.Contract.Symbol(&_Faucets.CallOpts)
}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() constant returns(uint256)
func (_Faucets *FaucetsCaller) TotalSupply(opts *bind.CallOpts) (*big.Int, error) {
	var (
		ret0 = new(*big.Int)
	)
	out := ret0
	err := _Faucets.contract.Call(opts, out, "totalSupply")
	return *ret0, err
}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() constant returns(uint256)
func (_Faucets *FaucetsSession) TotalSupply() (*big.Int, error) {
	return _Faucets.Contract.TotalSupply(&_Faucets.CallOpts)
}

// TotalSupply is a free data retrieval call binding the contract method 0x18160ddd.
//
// Solidity: function totalSupply() constant returns(uint256)
func (_Faucets *FaucetsCallerSession) TotalSupply() (*big.Int, error) {
	return _Faucets.Contract.TotalSupply(&_Faucets.CallOpts)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address _spender, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactor) Approve(opts *bind.TransactOpts, _spender common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "approve", _spender, _value)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address _spender, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsSession) Approve(_spender common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Approve(&_Faucets.TransactOpts, _spender, _value)
}

// Approve is a paid mutator transaction binding the contract method 0x095ea7b3.
//
// Solidity: function approve(address _spender, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) Approve(_spender common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Approve(&_Faucets.TransactOpts, _spender, _value)
}

// ChangeApproval is a paid mutator transaction binding the contract method 0x9281cd65.
//
// Solidity: function changeApproval(address _spender, uint256 _oldValue, uint256 _newValue) returns(bool ok)
func (_Faucets *FaucetsTransactor) ChangeApproval(opts *bind.TransactOpts, _spender common.Address, _oldValue *big.Int, _newValue *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "changeApproval", _spender, _oldValue, _newValue)
}

// ChangeApproval is a paid mutator transaction binding the contract method 0x9281cd65.
//
// Solidity: function changeApproval(address _spender, uint256 _oldValue, uint256 _newValue) returns(bool ok)
func (_Faucets *FaucetsSession) ChangeApproval(_spender common.Address, _oldValue *big.Int, _newValue *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.ChangeApproval(&_Faucets.TransactOpts, _spender, _oldValue, _newValue)
}

// ChangeApproval is a paid mutator transaction binding the contract method 0x9281cd65.
//
// Solidity: function changeApproval(address _spender, uint256 _oldValue, uint256 _newValue) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) ChangeApproval(_spender common.Address, _oldValue *big.Int, _newValue *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.ChangeApproval(&_Faucets.TransactOpts, _spender, _oldValue, _newValue)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactor) Mint(opts *bind.TransactOpts, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "mint", _value)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 _value) returns(bool ok)
func (_Faucets *FaucetsSession) Mint(_value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Mint(&_Faucets.TransactOpts, _value)
}

// Mint is a paid mutator transaction binding the contract method 0xa0712d68.
//
// Solidity: function mint(uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) Mint(_value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Mint(&_Faucets.TransactOpts, _value)
}

// MintMockTokens is a paid mutator transaction binding the contract method 0x5b2ae25b.
//
// Solidity: function mintMockTokens(address to, uint256 value) returns(bool)
func (_Faucets *FaucetsTransactor) MintMockTokens(opts *bind.TransactOpts, to common.Address, value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "mintMockTokens", to, value)
}

// MintMockTokens is a paid mutator transaction binding the contract method 0x5b2ae25b.
//
// Solidity: function mintMockTokens(address to, uint256 value) returns(bool)
func (_Faucets *FaucetsSession) MintMockTokens(to common.Address, value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.MintMockTokens(&_Faucets.TransactOpts, to, value)
}

// MintMockTokens is a paid mutator transaction binding the contract method 0x5b2ae25b.
//
// Solidity: function mintMockTokens(address to, uint256 value) returns(bool)
func (_Faucets *FaucetsTransactorSession) MintMockTokens(to common.Address, value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.MintMockTokens(&_Faucets.TransactOpts, to, value)
}

// NumeraiTransfer is a paid mutator transaction binding the contract method 0x7c8d56b8.
//
// Solidity: function numeraiTransfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactor) NumeraiTransfer(opts *bind.TransactOpts, _to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "numeraiTransfer", _to, _value)
}

// NumeraiTransfer is a paid mutator transaction binding the contract method 0x7c8d56b8.
//
// Solidity: function numeraiTransfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsSession) NumeraiTransfer(_to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.NumeraiTransfer(&_Faucets.TransactOpts, _to, _value)
}

// NumeraiTransfer is a paid mutator transaction binding the contract method 0x7c8d56b8.
//
// Solidity: function numeraiTransfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) NumeraiTransfer(_to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.NumeraiTransfer(&_Faucets.TransactOpts, _to, _value)
}

// Transfer is a paid mutator transaction binding the contract method 0xa9059cbb.
//
// Solidity: function transfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactor) Transfer(opts *bind.TransactOpts, _to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "transfer", _to, _value)
}

// Transfer is a paid mutator transaction binding the contract method 0xa9059cbb.
//
// Solidity: function transfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsSession) Transfer(_to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Transfer(&_Faucets.TransactOpts, _to, _value)
}

// Transfer is a paid mutator transaction binding the contract method 0xa9059cbb.
//
// Solidity: function transfer(address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) Transfer(_to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.Transfer(&_Faucets.TransactOpts, _to, _value)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address _from, address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactor) TransferFrom(opts *bind.TransactOpts, _from common.Address, _to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.contract.Transact(opts, "transferFrom", _from, _to, _value)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address _from, address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsSession) TransferFrom(_from common.Address, _to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.TransferFrom(&_Faucets.TransactOpts, _from, _to, _value)
}

// TransferFrom is a paid mutator transaction binding the contract method 0x23b872dd.
//
// Solidity: function transferFrom(address _from, address _to, uint256 _value) returns(bool ok)
func (_Faucets *FaucetsTransactorSession) TransferFrom(_from common.Address, _to common.Address, _value *big.Int) (*types.Transaction, error) {
	return _Faucets.Contract.TransferFrom(&_Faucets.TransactOpts, _from, _to, _value)
}

// FaucetsApprovalIterator is returned from FilterApproval and is used to iterate over the raw logs and unpacked data for Approval events raised by the Faucets contract.
type FaucetsApprovalIterator struct {
	Event *FaucetsApproval // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FaucetsApprovalIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FaucetsApproval)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FaucetsApproval)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FaucetsApprovalIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FaucetsApprovalIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FaucetsApproval represents a Approval event raised by the Faucets contract.
type FaucetsApproval struct {
	Owner   common.Address
	Spender common.Address
	Value   *big.Int
	Raw     types.Log // Blockchain specific contextual infos
}

// FilterApproval is a free log retrieval operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed spender, uint256 value)
func (_Faucets *FaucetsFilterer) FilterApproval(opts *bind.FilterOpts, owner []common.Address, spender []common.Address) (*FaucetsApprovalIterator, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var spenderRule []interface{}
	for _, spenderItem := range spender {
		spenderRule = append(spenderRule, spenderItem)
	}

	logs, sub, err := _Faucets.contract.FilterLogs(opts, "Approval", ownerRule, spenderRule)
	if err != nil {
		return nil, err
	}
	return &FaucetsApprovalIterator{contract: _Faucets.contract, event: "Approval", logs: logs, sub: sub}, nil
}

// WatchApproval is a free log subscription operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed spender, uint256 value)
func (_Faucets *FaucetsFilterer) WatchApproval(opts *bind.WatchOpts, sink chan<- *FaucetsApproval, owner []common.Address, spender []common.Address) (event.Subscription, error) {

	var ownerRule []interface{}
	for _, ownerItem := range owner {
		ownerRule = append(ownerRule, ownerItem)
	}
	var spenderRule []interface{}
	for _, spenderItem := range spender {
		spenderRule = append(spenderRule, spenderItem)
	}

	logs, sub, err := _Faucets.contract.WatchLogs(opts, "Approval", ownerRule, spenderRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FaucetsApproval)
				if err := _Faucets.contract.UnpackLog(event, "Approval", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseApproval is a log parse operation binding the contract event 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925.
//
// Solidity: event Approval(address indexed owner, address indexed spender, uint256 value)
func (_Faucets *FaucetsFilterer) ParseApproval(log types.Log) (*FaucetsApproval, error) {
	event := new(FaucetsApproval)
	if err := _Faucets.contract.UnpackLog(event, "Approval", log); err != nil {
		return nil, err
	}
	return event, nil
}

// FaucetsTransferIterator is returned from FilterTransfer and is used to iterate over the raw logs and unpacked data for Transfer events raised by the Faucets contract.
type FaucetsTransferIterator struct {
	Event *FaucetsTransfer // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FaucetsTransferIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FaucetsTransfer)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FaucetsTransfer)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FaucetsTransferIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FaucetsTransferIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FaucetsTransfer represents a Transfer event raised by the Faucets contract.
type FaucetsTransfer struct {
	From  common.Address
	To    common.Address
	Value *big.Int
	Raw   types.Log // Blockchain specific contextual infos
}

// FilterTransfer is a free log retrieval operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 value)
func (_Faucets *FaucetsFilterer) FilterTransfer(opts *bind.FilterOpts, from []common.Address, to []common.Address) (*FaucetsTransferIterator, error) {

	var fromRule []interface{}
	for _, fromItem := range from {
		fromRule = append(fromRule, fromItem)
	}
	var toRule []interface{}
	for _, toItem := range to {
		toRule = append(toRule, toItem)
	}

	logs, sub, err := _Faucets.contract.FilterLogs(opts, "Transfer", fromRule, toRule)
	if err != nil {
		return nil, err
	}
	return &FaucetsTransferIterator{contract: _Faucets.contract, event: "Transfer", logs: logs, sub: sub}, nil
}

// WatchTransfer is a free log subscription operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 value)
func (_Faucets *FaucetsFilterer) WatchTransfer(opts *bind.WatchOpts, sink chan<- *FaucetsTransfer, from []common.Address, to []common.Address) (event.Subscription, error) {

	var fromRule []interface{}
	for _, fromItem := range from {
		fromRule = append(fromRule, fromItem)
	}
	var toRule []interface{}
	for _, toItem := range to {
		toRule = append(toRule, toItem)
	}

	logs, sub, err := _Faucets.contract.WatchLogs(opts, "Transfer", fromRule, toRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FaucetsTransfer)
				if err := _Faucets.contract.UnpackLog(event, "Transfer", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseTransfer is a log parse operation binding the contract event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef.
//
// Solidity: event Transfer(address indexed from, address indexed to, uint256 value)
func (_Faucets *FaucetsFilterer) ParseTransfer(log types.Log) (*FaucetsTransfer, error) {
	event := new(FaucetsTransfer)
	if err := _Faucets.contract.UnpackLog(event, "Transfer", log); err != nil {
		return nil, err
	}
	return event, nil
}
