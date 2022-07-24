const config = {
  CREATOR_FUND: {
    KOVAN: {
      CONTRACT_ADDRESS: "0x8d68915f87c60c1e14062567bbb2de2264cabaa6",
      ABI: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnerSet",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "changeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "_tags",
              type: "string[]"
            },
            {
              internalType: "string",
              name: "_photo",
              type: "string"
            },
            {
              internalType: "string",
              name: "_description",
              type: "string"
            },
            {
              internalType: "string",
              name: "_emailId",
              type: "string"
            },
            {
              internalType: "string",
              name: "_website",
              type: "string"
            },
            {
              internalType: "string",
              name: "_linkedIn",
              type: "string"
            },
            {
              internalType: "string",
              name: "_instagram",
              type: "string"
            },
            {
              internalType: "string",
              name: "_twitter",
              type: "string"
            },
            {
              internalType: "string",
              name: "_country",
              type: "string"
            }
          ],
          name: "createOrUpdateCreator",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            }
          ],
          name: "createUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "creators",
          outputs: [
            {
              internalType: "string",
              name: "photo",
              type: "string"
            },
            {
              internalType: "string",
              name: "description",
              type: "string"
            },
            {
              internalType: "string",
              name: "emailId",
              type: "string"
            },
            {
              internalType: "string",
              name: "website",
              type: "string"
            },
            {
              internalType: "string",
              name: "linkedIn",
              type: "string"
            },
            {
              internalType: "string",
              name: "instagram",
              type: "string"
            },
            {
              internalType: "string",
              name: "twitter",
              type: "string"
            },
            {
              internalType: "string",
              name: "country",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_creator",
              type: "address"
            }
          ],
          name: "disableUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address payable",
              name: "_creator",
              type: "address"
            }
          ],
          name: "donate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "payable",
          type: "function"
        },
        {
          inputs: [],
          name: "getAllCreatorsList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getContractBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address"
            }
          ],
          name: "getCreatorInfo",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getUserData",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "bool",
              name: "",
              type: "bool"
            },
            {
              internalType: "bool",
              name: "",
              type: "bool"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "receivedFundsList",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "sentFundsList",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "totalCreatorsList",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "users",
          outputs: [
            {
              internalType: "address payable",
              name: "walletAddress",
              type: "address"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "bool",
              name: "isDisabled",
              type: "bool"
            },
            {
              internalType: "bool",
              name: "isCreator",
              type: "bool"
            },
            {
              internalType: "uint256",
              name: "totalFundContributorsCount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalFundsReceived",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalCreatorsFundedCount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalFundsSent",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "withdrawbleBalance",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_withdrawAmount",
              type: "uint256"
            }
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    GANACHE: {
      CONTRACT_ADDRESS: "0x4f690BB9A81E5Ddaf0624d91aC9F3214fb4a3794",
      ABI: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnerSet",
          type: "event"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "changeOwner",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string[]",
              name: "_tags",
              type: "string[]"
            },
            {
              internalType: "string",
              name: "_photo",
              type: "string"
            },
            {
              internalType: "string",
              name: "_description",
              type: "string"
            },
            {
              internalType: "string",
              name: "_emailId",
              type: "string"
            },
            {
              internalType: "string",
              name: "_website",
              type: "string"
            },
            {
              internalType: "string",
              name: "_linkedIn",
              type: "string"
            },
            {
              internalType: "string",
              name: "_instagram",
              type: "string"
            },
            {
              internalType: "string",
              name: "_twitter",
              type: "string"
            },
            {
              internalType: "string",
              name: "_country",
              type: "string"
            }
          ],
          name: "createOrUpdateCreator",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            }
          ],
          name: "createUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "creators",
          outputs: [
            {
              internalType: "string",
              name: "photo",
              type: "string"
            },
            {
              internalType: "string",
              name: "description",
              type: "string"
            },
            {
              internalType: "string",
              name: "emailId",
              type: "string"
            },
            {
              internalType: "string",
              name: "website",
              type: "string"
            },
            {
              internalType: "string",
              name: "linkedIn",
              type: "string"
            },
            {
              internalType: "string",
              name: "instagram",
              type: "string"
            },
            {
              internalType: "string",
              name: "twitter",
              type: "string"
            },
            {
              internalType: "string",
              name: "country",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_creator",
              type: "address"
            }
          ],
          name: "disableUser",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address payable",
              name: "_creator",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_price",
              type: "uint256"
            }
          ],
          name: "donate",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ],
          stateMutability: "payable",
          type: "function"
        },
        {
          inputs: [],
          name: "getAllCreatorsList",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getContractBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address"
            }
          ],
          name: "getCreatorInfo",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "getOwner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_address",
              type: "address"
            }
          ],
          name: "getUserData",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "string",
              name: "",
              type: "string"
            },
            {
              internalType: "bool",
              name: "",
              type: "bool"
            },
            {
              internalType: "bool",
              name: "",
              type: "bool"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "receivedFundsList",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "sentFundsList",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "totalCreatorsList",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            }
          ],
          name: "users",
          outputs: [
            {
              internalType: "address payable",
              name: "walletAddress",
              type: "address"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            },
            {
              internalType: "bool",
              name: "isDisabled",
              type: "bool"
            },
            {
              internalType: "bool",
              name: "isCreator",
              type: "bool"
            },
            {
              internalType: "uint256",
              name: "totalFundContributorsCount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalFundsReceived",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalCreatorsFundedCount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "totalFundsSent",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "withdrawbleBalance",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_withdrawAmount",
              type: "uint256"
            }
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    }
  }
};

export default config;
