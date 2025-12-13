
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; 

const Contacts = ({ user, authLoading }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [rows, setRows] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Logíc Auth
        if (authLoading) {
            return; 
        }
        
        if (!user) {
            // When ProtectedLayout block user
            setError("Error: You need to login to see this.");
            setLoadingData(false);
            return; 
        }
        // Lấy dữ liệu từ Firestore
        const fetchContacts = async () => {
            try {
                setLoadingData(true);
                setError(null);

                const querySnapshot = await getDocs(collection(db, "contacts"));
                const contactsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id, 
                    ...doc.data(),
                }));
                setRows(contactsData);
            } catch (err) {
                console.error("Error when trying to upload data from Firestore:", err);
                setError("Cannot load. Please check your permission.");
            } finally {
                setLoadingData(false);
            }
        };
        
        fetchContacts();

    }, [user, authLoading]); 

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "Zip Code", flex: 1 },
    ];

    if (authLoading || loadingData) {
        return <Box m="20px"><Header title="CONTACTS" subtitle="Loading..." /></Box>;
    }
    
    if (error) {
        return <Box m="20px"><Header title="LỖI" subtitle={error} /></Box>;
    }

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of contacts" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": { border: "none" },
                    "& .MuiDataGrid-cell": { borderBottom: "none" },
                    "& .name-column--cell": { color: colors.greenAccent[300] },
                    "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700] },
                    "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
                    "& .MuiDataGrid-footerContainer": { backgroundColor: colors.blueAccent[700] },
                }}
            >
                <DataGrid rows={rows} columns={columns} />
            </Box>
        </Box>
    );
};

export default Contacts;
